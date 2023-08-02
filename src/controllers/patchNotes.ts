import { Request, Response } from 'express';
import NoteModele from '../schema/notesModels';

export const patchNoteById = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    const { arrayOfDate, ...updateData } = req.body;
  
    try {
      const note = await NoteModele.findById(noteId);
      if (!note) {
        return res.status(404).json({ message: 'Заметка не найдена' });
      }
      const currentDates = note.dates || [];
  
      if (arrayOfDate) {
        currentDates.push(arrayOfDate);
      }
  
      const updatedNote = await NoteModele.findByIdAndUpdate(
        noteId,
        { ...updateData, dates: currentDates },
        { new: true }
      );
  
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Не удалось обновить заметку' });
    }
  };