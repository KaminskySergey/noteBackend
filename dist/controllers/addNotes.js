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
exports.addNote = void 0;
const notesModels_1 = __importDefault(require("../schema/notesModels"));
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { arrayOfDate } = _a, noteData = __rest(_a, ["arrayOfDate"]);
        const newNote = new notesModels_1.default(Object.assign(Object.assign({}, noteData), { dates: [arrayOfDate], time: new Date() }));
        console.log(req.body);
        const savedNote = yield newNote.save();
        res.status(201).json(savedNote);
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message });
        }
        else {
            console.log(error.message, 'qqqqqqqqqqqqqqqqqqqqqqqqqq');
            res.status(500).json({ message: "Failed to add the note" });
        }
    }
});
exports.addNote = addNote;
