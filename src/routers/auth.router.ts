import BaseRoutes from './base.router';

// controllers
import AuthController from '../controllers/auth.controller';

// validator
import validate from '../validators/validator';
import authValidation from '../validators/auth.validator';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', validate(authValidation), AuthController.register);
    this.router.post('/login', validate(authValidation), AuthController.login);
    this.router.get('/profile', AuthController.profile);
  }
}

export default new AuthRoutes().router;
