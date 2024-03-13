// fontRoutes.js

const express = require('express');
const router = express.Router();
const fontController = require('../controllers/fontController');

// Route for fetching all fonts
router.get('/', fontController.getAllFonts);

// Route for creating a new font
router.post('/', fontController.createFont);

// Route for deleting a font
router.delete('/:id', fontController.deleteFont);

module.exports = router;
