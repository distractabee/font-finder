// authController.js

const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Controller function for user registration
exports.registerUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function for user login
exports.loginUser = (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        req.logIn(user, (error) => {
            if (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            return res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
};

// Controller function for user logout
exports.logoutUser = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout successful' });
};
