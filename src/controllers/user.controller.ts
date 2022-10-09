import { Request, Response } from 'express';
import IController from './controller.interface';

// dummy data
let data: any[] = [
  { id: 1, name: 'najib' },
  { id: 2, name: 'raihan' },
  { id: 3, name: 'arifa' },
  { id: 4, name: 'aiman' },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({
      id,
      name,
    });

    return res.send('create data success!');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((el) => el.id === parseInt(id));

    return res.send(person);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((el) => el.id === parseInt(id));
    person.name = name;

    return res.send('update sukses');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    let people = data.filter((el) => el.id !== parseInt(id));
    return res.send(people);
  }
}

export default new UserController();
