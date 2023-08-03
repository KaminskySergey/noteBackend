

import mongoose from 'mongoose';
import { config } from 'dotenv';
import { app } from './app';

const port = 3000;
config()



const mongoURL = process.env.MONGO || 'mongodb://localhost:27017/notebook';
console.log(process.env.MONGO, 'MONGOMONGOMONGOMONGOMONGOMONGOMONGO')
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
