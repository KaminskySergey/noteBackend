import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Date, default: Date.now },
  category: { type: String, enum: ['Task', 'Idea', 'Quote'], default: 'Quote' },
  content: { type: String, required: true },
  dates: { type: [String] },
  archived: { type: Boolean, default: false },
  arrayOfDate: { type: String },
});

const NoteModele = mongoose.model('Note', noteSchema);

export default NoteModele;