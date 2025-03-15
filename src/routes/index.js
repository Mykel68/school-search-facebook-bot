const express = require('express');
const router = express.Router();

// Home route: Shows a welcome message
router.get('/', (req, res) => {
    res.send('Welcome to the Facebook School Bot API');
});

router.use('/facebook', require('./facebook.routes'));

module.exports = router;
