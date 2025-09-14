// models/Note.js
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  content: { type: String, default: "" },
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }
}, { timestamps: true });

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
