"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleArchived = void 0;
const notesModels_1 = __importDefault(require("../schema/notesModels"));
const toggleArchived = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.archived;
    try {
        const note = yield notesModels_1.default.findById(noteId);
        if (!note) {
            return res.status(404).json({ message: 'Заметка не найдена' });
        }
        note.archived = !note.archived;
        const updatedNote = yield note.save();
        res.json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ message: 'Не удалось обновить заметку' });
    }
});
exports.toggleArchived = toggleArchived;
