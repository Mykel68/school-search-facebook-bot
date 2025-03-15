const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const { errorHandler } = require('./src/middleware/errorHandler');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Serve static files (including the favicon)
app.use(express.static('public'));

// Main API routes
app.use('/api', routes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
