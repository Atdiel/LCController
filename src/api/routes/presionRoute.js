const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistry } = require('../controllers/registryController');

//* VALIDATORS ✅✅
const {
  presionValidator,
} = require('../validators/presionValidator');

//* ROUTES ✈️✈️

router.post('/presion', presionValidator, createRegistry);

module.exports = router;
