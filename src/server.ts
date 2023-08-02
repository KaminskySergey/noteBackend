import express from 'express';
import { Request, Response } from 'express';
import routes from './routes/notes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from './app';
dotenv.config();

const port = 3000;

app.use(express.json());
app.use('/api', routes);

const mongoURL = process.env.MONGO || 'mongodb://localhost:27017/notebook';

mongoose.connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on http://localhost:" + port);
    });
  })
  .catch((err: Error) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
