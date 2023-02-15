import { check } from 'express-validator';

const authValidation = [
  check('description')
    .exists()
    .withMessage('Description property must be exist')
    .bail()
    .isString()
    .withMessage('Must be string'),
];

export default authValidation;
