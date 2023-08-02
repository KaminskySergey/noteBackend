"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    time: { type: Date },
    category: { type: String, enum: ['Task', 'Idea', 'Quota'], default: 'Quota' },
    content: { type: String, required: true },
    dates: { type: [String] },
    archived: { type: Boolean, default: false },
    arrayOfDate: { type: String, required: true },
});
const NoteModele = mongoose_1.default.model('Note', noteSchema);
exports.default = NoteModele;
