import { Request } from 'express';
const db = require('./../db/models');

class TodoService {
  // ini type nya -- kok gak pake type/interface ya?
  credential: {
    id: number;
  };
  body: Request['body'];
  params: Request['params'];

  constructor(req: Request) {
    this.credential = req.app.locals.credential;
    this.body = req.body;
    this.params = req.params;
  }

  async getAll() {
    const todos = await db.Todo.findAll({
      where: { user_id: this.credential.id },
      attributes: ['id', 'description'],
    });

    return todos;
  }

  async getOne() {
    const { id } = this.params;

    const todo = await db.Todo.findOne({
      where: {
        id,
        user_id: this.credential.id,
      },
    });

    return todo;
  }

  async store() {
    const { description } = this.body;
    const todo = await db.Todo.create({
      user_id: this.credential.id,
      description,
    });

    return todo;
  }

  async update() {
    const { id } = this.params;
    const { description } = this.body;

    const todo = await db.Todo.update(
      {
        description,
      },
      {
        where: {
          id,
          user_id: this.credential.id,
        },
      }
    );

    return todo;
  }

  async remove() {
    const { id } = this.params;

    const todo = await db.Todo.destroy({
      where: {
        id,
        user_id: this.credential.id,
      },
    });

    return todo;
  }
}

export default TodoService;
