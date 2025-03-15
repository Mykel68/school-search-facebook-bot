const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebook.controller');

// Endpoint for webhook verification and message events
router.get('/webhook', facebookController.verifyWebhook);

module.exports = router;
