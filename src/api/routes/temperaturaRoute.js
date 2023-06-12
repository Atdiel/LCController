const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistry } = require('../controllers/registryController');

//* VALIDATORS ✅✅
const {
  temperaturaValidator,
} = require('../validators/temperaturaValidator');

//* ROUTES ✈️✈️

router.post('/temperatura', temperaturaValidator, createRegistry);

module.exports = router;
