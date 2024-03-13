// authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

// Route for user logout
router.get('/logout', authController.logoutUser);

module.exports = router;
