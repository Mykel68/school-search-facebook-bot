// src/routes/facebookRoutes.js
const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebook.controller');

// Endpoint for webhook verification and message events
router.get('/webhook', facebookController.verifyWebhook);
router.post('/webhook', facebookController.handleWebhook);

module.exports = router;
