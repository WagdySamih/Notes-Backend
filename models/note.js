const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.index({ title: "text", description: "text" });

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
