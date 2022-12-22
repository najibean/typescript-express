import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config as dotenv } from 'dotenv';

// morgan berfungsi untuk melihat url yang sedang dikonsumsi
import morgan from 'morgan';

// compression untuk memperkecil ukuran dari response
import compression from 'compression';

// cors berfungsi untuk handle cors origin
import cors from 'cors';

// helmet berfungsi melindungi header dari attackers
import helmet from 'helmet';

// routers
import UserRoutes from './routers/user.router';
import AuthRoutes from './routers/auth.router';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      return res.send('ini adalah route menggunakan typescript');
    });

    this.app.use('/api/v1/users', UserRoutes);
    this.app.use('/api/v1/auth', AuthRoutes);
    // this.app.use() --> untuk global error handler
  }
}

const PORT: number = 8000;
const app = new App().app;
app.listen(PORT, () => console.log('Aplikasi ini berjalan di port ' + PORT));
