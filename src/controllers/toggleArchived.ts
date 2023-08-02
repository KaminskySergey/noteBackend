import { Request, Response } from 'express';
import NoteModele from '../schema/notesModels';

export const toggleArchived = async (req: Request, res: Response) => {
    const noteId = req.params.archived;
  
    try {
      const note = await NoteModele.findById(noteId);
  
      if (!note) {
        return res.status(404).json({ message: 'Заметка не найдена' });
      }
  
      note.archived = !note.archived;
  
      const updatedNote = await note.save();
  
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Не удалось обновить заметку' });
    }
  };