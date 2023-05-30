const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const registryValidator = [
  check('temperatura')
    .exists()
    .withMessage(
      "Doesn't be an empty value",
    )
    .bail()
    .isFloat()
    .withMessage(
      'Should be a float value',
    ),
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
  check('caudal')
    .exists()
    .withMessage(
      "Doesn't be an empty value",
    )
    .bail()
    .isFloat()
    .withMessage(
      'Should be a float value',
    ),
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
  check('cbd_estimado')
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

module.exports = { registryValidator };
