import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
