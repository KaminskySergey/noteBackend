import { Request, Response } from 'express';
import NoteModele from '../schema/notesModels';

export const findByIdNote = async (req: Request, res: Response) => {
  const noteId = req.params.id;

  try {
    const note = await NoteModele.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: 'Заметка не найдена' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти заметку' });
  }
};