import { Request, Response } from "express";
import NoteModele from "../schema/notesModels";
export const addNote = async (req: Request, res: Response) => {
    try {
      const { arrayOfDate, ...noteData } = req.body;
      const newNote = new NoteModele({ ...noteData, dates: [arrayOfDate], time: new Date() });
     console.log(req.body)
      // Сохраняем запись в базе данных
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
      
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        // Возвращаем сообщение об ошибке валидации
        res.status(400).json({ message: error.message });
      } else {
        // Возвращаем общее сообщение об ошибке
        console.log(error.message, 'qqqqqqqqqqqqqqqqqqqqqqqqqq');
        res.status(500).json({ message: "Failed to add the note" });
      }
    }
  };
  
  
  
  
  
  