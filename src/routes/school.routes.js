const express = require('express');
const router = express.Router();
const schoolSearchService = require('../services/school-search.service');

// GET /api/schools/potential
// This route will return the list of potential schools that match our criteria.
router.get('/potential', async (req, res, next) => {
    try {
        // You can adjust the query parameter as needed.
        const schools = await schoolSearchService.findSchools("Nigeria schools");
        res.json(schools);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
