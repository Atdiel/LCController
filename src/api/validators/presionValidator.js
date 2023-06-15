const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const presionValidator = [
  check('presion')
    .exists()
    .withMessage(
      "Doesn't be an empty value",
    )
    .bail()
    .isFloat()
    .withMessage(
      'Should be a float value',
    ),
  validatorHandler,

];

module.exports = { presionValidator };
