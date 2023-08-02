import express from 'express';
import logger from 'morgan';
import cors from 'cors';



const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});