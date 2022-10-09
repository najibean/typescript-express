import BaseRoutes from './base.router';

// controllers
import AuthController from '../controllers/auth.controller';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', AuthController.index);
    this.router.post('/login', AuthController.create);
  }
}

export default new AuthRoutes();
