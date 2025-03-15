const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebook.controller');

// Endpoint for webhook verification and message events
router.get('/webhook', facebookController.verifyWebhook);

// Privacy Policy route
router.get('/privacy-policy', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Privacy Policy</title>
        <meta charset="UTF-8" />
      </head>
      <body>
        <h1>Privacy Policy</h1>
        <p>
          This is where you include your full Privacy Policy text. 
          Be sure to detail how you collect, use, and share personal data 
          in compliance with Facebook's policies and relevant data protection laws.
        </p>
        <p>
          For example:
          <ul>
            <li><strong>Data Collection:</strong> We collect user profile info or messages only as needed.</li>
            <li><strong>Data Usage:</strong> We use data solely to provide our Facebook School Bot functionality.</li>
            <li><strong>Data Sharing:</strong> We do not share personal data with third parties except as necessary to operate the service.</li>
          </ul>
        </p>
        <p>Contact us at <a href="mailto:mykeldigital6@gmail.com">mykeldigital6@gmail.com</a> for any questions regarding this policy.</p>
      </body>
    </html>
  `);
});


router.post('/webhook', facebookController.handleWebhook);

module.exports = router;
