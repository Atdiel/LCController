const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistry } = require('../controllers/registryController');

//* VALIDATORS ✅✅
const { registryValidator } = require('../validators/registryValidator');

//* ROUTES ✈️✈️

router.post('/registry', registryValidator, createRegistry);

module.exports = router;
