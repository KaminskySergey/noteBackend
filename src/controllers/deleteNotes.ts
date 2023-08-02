import { Request, Response } from "express";
import NoteModele from "../schema/notesModels";

export const deleteNote = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    try {
      const existingNote = await NoteModele.findById(noteId);
      if (!existingNote) {
        return res.status(404).json({ message: 'Заметка не найдена' });
      }
      await NoteModele.findByIdAndDelete(noteId);
  
      res.json({ message: 'Заметка успешно удалена' });
    } catch (error) {
      res.status(500).json({ message: 'Не удалось удалить заметку' });
    }
  };
  
  
  
  
  
  