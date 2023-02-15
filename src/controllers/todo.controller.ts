import { Request, Response } from 'express';
import IController from './controller.interface';
import TodoService from '../services/todo.service';

class TodoController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.status(200).send({
      datas: todos,
      message: 'success get all todos',
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.status(200).send({
      data: todo,
      message: 'todo created',
    });
  }

  async show(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.status(200).send({
      data: todo,
      message: 'success get todo',
    });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    return res.status(200).send({
      data: todo,
      message: 'success update todo',
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.remove();

    return res.status(200).send({
      data: todo,
      message: 'success delete todo',
    });
  }
}

export default new TodoController();
