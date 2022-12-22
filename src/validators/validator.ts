import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validate = (validations: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((el) => el.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const extractedErrors: any = {};
    errors.array().forEach((obj) => {
      if (!obj.param) return;

      if (!extractedErrors[obj.param]) {
        extractedErrors[obj.param] = [obj.msg];
      } else {
        extractedErrors[obj.param].push(obj.msg);
      }
    });

    return res.status(422).json({
      message: 'Please check your input',
      errors: extractedErrors,
    });
  };
};

export default validate;
