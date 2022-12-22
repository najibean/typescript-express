import { NextFunction, Request, Response } from 'express';
import Authentication from '../utils/authentication';
const db = require('../db/models');

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    const createdUser = await db.User.create({
      username,
      password: hashedPassword,
    });

    return res.send(createdUser);
  }

  async login(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;
    // find user by username
    const user = await db.User.findOne({ where: { username } });
    if (!user) return res.status(400).send('User not found');

    // check password
    const compare = await Authentication.passwordCompare(password, user.password);
    if (!compare) return res.status(400).send('Your password is incorrect!');

    // generate token
    const token = Authentication.generateToken({
      id: user.id,
      username: user.username,
      password: user.password,
    });

    return res.send(token);
  }

  async profile(req: Request, res: Response): Promise<Response> {
    return res.send('');
  }
}

export default new AuthController();
