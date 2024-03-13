// fontController.js

const Font = require('../models/font');

// Controller function to fetch all fonts
exports.getAllFonts = async (req, res) => {
    try {
        const fonts = await Font.find();
        res.status(200).json(fonts);
    } catch (error) {
        console.error('Error fetching fonts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to create a new font
exports.createFont = async (req, res) => {
    try {
        const { name, style, category } = req.body;
        const newFont = new Font({ name, style, category });
        await newFont.save();
        res.status(201).json({ message: 'Font created successfully', font: newFont });
    } catch (error) {
        console.error('Error creating font:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to delete a font
exports.deleteFont = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFont = await Font.findByIdAndDelete(id);
        if (!deletedFont) {
            return res.status(404).json({ message: 'Font not found' });
        }
        res.status(200).json({ message: 'Font deleted successfully', font: deletedFont });
    } catch (error) {
        console.error('Error deleting font:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
