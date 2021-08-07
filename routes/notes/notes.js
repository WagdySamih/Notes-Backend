const { Router } = require("express");
const router = Router({ mergeParams: true });
const asyncHandler = require("express-async-handler");

const {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
} = require("../../controllers/notes");

const updateNoteValidator = require("../../middleware/validations/updateNoteValidator");
const createNoteValidator = require("../../middleware/validations/createNoteValidator");
const readAllValidator = require("../../middleware/validations/getAllNotesValidtor");

const { validateRequest } = require("../../utils/joi");
router.post(
  "/",
  validateRequest(createNoteValidator, "body"),
  asyncHandler(createNote)
);

router.get(
  "/",
  validateRequest(readAllValidator, "query"),
  asyncHandler(getAllNotes)
);

router.delete("/:noteId", asyncHandler(deleteNote));

router.patch(
  "/:noteId",
  validateRequest(updateNoteValidator, "body"),
  asyncHandler(updateNote)
);

module.exports = router;
