const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistry } = require('../controllers/registryController');

//* VALIDATORS ✅✅
const { velocidadValidator } = require('../validators/velocidadValidator');

//* ROUTES ✈️✈️

router.post('/velocidad', velocidadValidator, createRegistry);

module.exports = router;
