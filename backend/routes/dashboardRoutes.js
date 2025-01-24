const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const { authenticate, authorize } = require('../middleware/middlewares');
const router = express.Router();

router.get('/data', authenticate, authorize('admin', 'mentor'), getDashboardData);

module.exports = router;
