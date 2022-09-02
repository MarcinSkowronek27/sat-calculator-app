const express = require('express');
const router = express.Router();

const appController = require('../controllers/app.controller');

router.get('/calculateDieselUsageForDistance', appController.fuelUsage);
router.get('/probabilityOfUnitInjectorFail', appController.probabilityInjectorFail);

module.exports = router;
