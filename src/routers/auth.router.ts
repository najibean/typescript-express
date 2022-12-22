import BaseRoutes from './base.router';

// controllers
import AuthController from '../controllers/auth.controller';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', AuthController.register);
    this.router.post('/login', AuthController.login);
  }
}

export default new AuthRoutes().router;
