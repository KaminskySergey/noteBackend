import { Request, Response } from "express";
import NoteModele from "../schema/notesModels";

export const getNotes = async (req: Request, res: Response) => {
    try {
      const notes = await NoteModele.find();
      res.json(notes);
    } catch (error) {
        console.error(error); 
      res.status(500).json({ message: 'Failed to fetch notes' });
    }
  };