const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistry } = require('../controllers/registryController');

//* VALIDATORS ✅✅
const { caudalValidator } = require('../validators/caudalValidator');

//* ROUTES ✈️✈️

router.post('/caudal', caudalValidator, createRegistry);

module.exports = router;
