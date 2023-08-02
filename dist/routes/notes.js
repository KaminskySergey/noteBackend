"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getNotes_1 = require("../controllers/getNotes");
// import { getNotes, createNote, updateNote, deleteNote } from '../services/notes';
const router = express_1.default.Router();
router.get('/notes', getNotes_1.getNotes);
// router.post('/notes', createNote);
// router.put('/notes/:id', updateNote);
// router.delete('/notes/:id', deleteNote);
exports.default = router;
