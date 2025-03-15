const express = require('express');
const router = express.Router();

// Home route: Shows a welcome message
router.get('/', (req, res) => {
    res.send('Welcome to the Facebook School Bot API');
});

router.use('/facebook', require('./facebook.routes'));

router.get('/privacy-policy', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Privacy Policy</title>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
          }
          h1, h2 {
            color: #333;
          }
          ul {
            margin-left: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> [Month Day, Year]</p>

        <p>
          Thank you for choosing to use our Facebook School Bot (the “Service”). 
          This Privacy Policy explains how we collect, use, disclose, and safeguard 
          your information when you use the Service, or any other media form, 
          media channel, or related services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>a. Personal Data:</strong> We may collect personal information 
          (such as your Facebook user ID, name, or profile picture) when you 
          interact with our Service, including sending or receiving messages.
        </p>
        <p>
          <strong>b. Usage Data:</strong> We may automatically collect certain 
          information about your interactions with the Service, such as timestamps 
          of messages or analytics data to help us understand and improve usage.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          <strong>a. Provide and Maintain the Service:</strong> We use your 
          information to operate and maintain the functionality of our Facebook 
          School Bot, including sending automated messages as described.
        </p>
        <p>
          <strong>b. Communications:</strong> We may use your personal information 
          to respond to inquiries, send updates, or provide customer support. 
          You may opt out of receiving promotional messages at any time.
        </p>
        <p>
          <strong>c. Analytics:</strong> We may analyze aggregate data to improve 
          the Service, develop new features, and enhance user experience.
        </p>

        <h2>3. How We Share Your Information</h2>
        <p>
          <strong>a. Third-Party Service Providers:</strong> We do not share your 
          personal data with third parties except as necessary to operate the 
          Service or comply with legal obligations.
        </p>
        <p>
          <strong>b. Legal Compliance:</strong> We may disclose your information 
          if required to do so by law or in response to valid requests by public 
          authorities (e.g., a court or government agency).
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable measures to protect your information. However, 
          no electronic transmission or storage of data can be guaranteed to be 
          100% secure. Please exercise caution when transmitting personal data.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain personal data for as long as necessary to fulfill the purposes 
          outlined in this Privacy Policy, unless a longer retention period is 
          required or permitted by law.
        </p>

        <h2>6. Your Rights and Choices</h2>
        <p>
          Depending on your location, you may have certain rights regarding your 
          personal information, including the right to access, correct, or delete 
          the data we hold about you. To exercise these rights, please contact us 
          at the email address below.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Service is not directed to children under the age of 13. We do not 
          knowingly collect personal information from children under 13. If you 
          believe we have collected data from a child under 13, please contact us 
          so we can remove the information.
        </p>

        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you 
          of any changes by posting the new policy here, and the “Effective Date” 
          at the top of this page will indicate when the latest revisions were made.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise any 
          of your rights regarding your personal data, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:mykeldigital6@gmail.com">mykeldigital6@gmail.com</a>
        </p>
      </body>
    </html>
  `);
});

module.exports = router;
