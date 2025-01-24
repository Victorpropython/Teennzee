const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

//router.post('/register', register); // Fixed endpoint path
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


router.post('/register', (req, res, next) => {
  console.log("Register route hit");
  next();
}, register);


module.exports = router;
