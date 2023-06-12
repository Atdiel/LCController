const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const velocidadValidator = [
  check('velocidad')
    .exists().exists()
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

module.exports = { velocidadValidator };
