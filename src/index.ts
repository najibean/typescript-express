import express, { Application, Request, Response } from 'express';

const app = express();

app.route('/ok').get((req: Request, res: Response) => {
  res.send('Hi, ini router pertama Najib');
});

app.listen(7000, () => console.log('App run in port 7000'));
