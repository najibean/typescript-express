import express, { Application, Request, Response } from 'express';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      return res.send('ini adalah route menggunakan typescript');
    });
  }
}

const PORT: number = 8000;
const app = new App().app;
app.listen(PORT, () => console.log('Aplikasi ini berjalan di port ' + PORT));
