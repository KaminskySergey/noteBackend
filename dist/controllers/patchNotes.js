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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchNoteById = void 0;
const notesModels_1 = __importDefault(require("../schema/notesModels"));
const patchNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.id;
    const _a = req.body, { arrayOfDate } = _a, updateData = __rest(_a, ["arrayOfDate"]);
    try {
        const note = yield notesModels_1.default.findById(noteId);
        if (!note) {
            return res.status(404).json({ message: 'Заметка не найдена' });
        }
        const currentDates = note.dates || [];
        if (arrayOfDate) {
            currentDates.push(arrayOfDate);
        }
        const updatedNote = yield notesModels_1.default.findByIdAndUpdate(noteId, Object.assign(Object.assign({}, updateData), { dates: currentDates }), { new: true });
        res.json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ message: 'Не удалось обновить заметку' });
    }
});
exports.patchNoteById = patchNoteById;
