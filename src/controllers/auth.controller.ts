import { Request, Response } from 'express';
const db = require('../db/models');

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;

    const createdUser = await db.User.create({
      username,
      password,
    });

    return res.send(createdUser);
  }

  login(req: Request, res: Response): Response {
    return res.send('');
  }
}

export default new AuthController();
