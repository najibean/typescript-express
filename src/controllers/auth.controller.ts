import { Request, Response } from 'express';
import PasswordHash from '../utils/passwordHash';
const db = require('../db/models');

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    const createdUser = await db.User.create({
      username,
      password: hashedPassword,
    });

    return res.send(createdUser);
  }

  login(req: Request, res: Response): Response {
    return res.send('');
  }
}

export default new AuthController();
