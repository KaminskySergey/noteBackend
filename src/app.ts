import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import routes from './routes/notes';
import { Request, Response } from "express";

export const app = express();


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api', routes);

// Пустой обработчик для корневого маршрута "/"
app.get('/', (req: Request, res: Response) => {
    res.status(200).end();
  });
  
  // Пустой обработчик для "/favicon.ico"
  app.get('/favicon.ico', (req: Request, res: Response) => {
    res.status(200).end();
  });

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });
  
  app.use((err: any, req: any, res: any, next: any) => {
    res.status(500).json({ message: err.message });
  });