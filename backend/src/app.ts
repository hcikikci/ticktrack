import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from backend!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
