import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import routes from './routes/notes';

export const app = express();


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api', routes);


app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });
  
  app.use((err: any, req: any, res: any, next: any) => {
    res.status(500).json({ message: err.message });
  });