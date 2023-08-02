import { Request, Response } from "express";
import NoteModele from "../schema/notesModels";

interface NoteStats {
    [category: string]: {
      total: number;
      active: number;
      archived: number;
    };
  }

export const getStats = async (req: Request, res: Response) => {
    try {
      const categories = ['Idea', 'Task', 'Quote'];
      const stats: NoteStats = {};
  
      for (const category of categories) {
        const total = await NoteModele.countDocuments({ category });
        const active = await NoteModele.countDocuments({ category, archived: false });
        const archived = await NoteModele.countDocuments({ category, archived: true });
  
        stats[category] = { total, active, archived };
      }
  
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch statistics' });
    }
  };