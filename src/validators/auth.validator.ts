import { check } from 'express-validator';

const authValidation = [
  check('username').isString().withMessage('Must be string'),
  check('password')
    .isString()
    .withMessage('Must be string')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Minimum characters is 6 characters'),
];

export default authValidation;
