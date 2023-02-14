import BaseRoutes from './base.router';
import { auth } from '../middlewares/auth.middleware';

// controllers
import TodoController from '../controllers/user.controller';

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, TodoController.index);
    this.router.post('/', auth, TodoController.create);
    this.router.get('/:id', auth, TodoController.show);
    this.router.put('/:id', auth, TodoController.update);
    this.router.delete('/:id', auth, TodoController.delete);
  }
}

export default new TodoRoutes().router;
