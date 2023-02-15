import { Request, Response } from 'express';
import IController from './controller.interface';
const db = require('./../db/models');

class TodoController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const { id: idUser } = req.app.locals.credential;

    const todos = await db.Todo.findAll({
      where: { user_id: idUser },
      attributes: ['id', 'description'],
    });

    return res.status(200).send({
      datas: todos,
      message: 'success get all todos',
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id: idUser } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.Todo.create({
      user_id: idUser,
      description,
    });

    return res.status(200).send({
      data: todo,
      message: 'todo created',
    });
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id: idUser } = req.app.locals.credential;
    const { id } = req.params;

    const todo = await db.Todo.findOne({
      where: {
        id,
        user_id: idUser,
      },
    });

    return res.status(200).send({
      data: todo,
      message: 'success get todo',
    });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id: idUser } = req.app.locals.credential;
    const { id } = req.params;
    const { description } = req.body;

    await db.Todo.update(
      {
        description,
      },
      { where: { id, user_id: idUser } }
    );

    return res.status(200).send({
      message: 'success update todo',
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id: idUser } = req.app.locals.credential;
    const { id } = req.params;

    await db.Todo.destroy({
      where: {
        id,
        user_id: idUser,
      },
    });

    return res.status(200).send({
      message: 'success delete todo',
    });
  }
}

export default new TodoController();
