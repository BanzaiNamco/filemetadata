import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import multer
import multer from 'multer';

dotenv.config();

const app = express();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});


app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
