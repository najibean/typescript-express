import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      return res.send('ini adalah route menggunakan typescript');
    });

    this.app.route('/users').post((req: Request, res: Response) => {
      return res.send(req.body);
    });
  }
}

const PORT: number = 8000;
const app = new App().app;
app.listen(PORT, () => console.log('Aplikasi ini berjalan di port ' + PORT));