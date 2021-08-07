const express = require("express");
const Note = require("../models/note.js");

const router = new express.Router();


/**
 * @description: create a note 
 * @body {title, description }
 */
exports.createNote = async (req, res) => {
  try {
    const note = new Note({
      ...req.body,
    });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 *
 * @description: get all notes
 * @query params : search
 */
exports.getAllNotes = async (req, res) => {
  try {
    let notes;
    if (req.query.search) {
      const $text = {};
      $text.$search = req.query.search;
      notes = await Note.find(
        { $text },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } });
    } else {
      notes = await Note.find({});
    }
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * @description: Update notes title or description 
 * @body {title, description }
 */
exports.updateNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.noteId);
    if (!note) return res.status(404).send();

    Object.assign(note, req.body);
    await note.save();
    return res.send(note);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * @description: delete note by id
 */
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.noteId);
    if (!note) return res.status(404).send();
    res.send(note);
  } catch (error) {
    res.status(500).send();
  }
};

exports = router;
