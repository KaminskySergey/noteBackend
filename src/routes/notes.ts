import express from 'express';
import { getNotes } from '../controllers/getNotes';
import { addNote } from '../controllers/addNotes';
import { addArchived, addValidation } from '../helpers/validation';
import { deleteNote } from '../controllers/deleteNotes';
import { findByIdNote } from '../controllers/findByIdNotes';
import { patchNoteById } from '../controllers/patchNotes';
import { toggleArchived } from '../controllers/toggleArchived';
import { getStats } from '../controllers/getStats';

const router = express.Router();

router.get('/notes', getNotes);
router.get('/notes/stats', getStats);
router.post('/notes', addValidation, addNote);
router.delete('/notes/:id', deleteNote);
router.get('/notes/:id', findByIdNote);
router.patch('/notes/:id', addValidation, patchNoteById);
router.put('/notes/:archived', addArchived, toggleArchived);

export default router;