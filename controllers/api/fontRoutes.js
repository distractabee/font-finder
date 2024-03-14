const router = require('express').Router();
const { Fonts } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newFont = await Fonts.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFont);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const fontData = await Fonts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!fontData) {
            res.status(400).json({ message: 'No font found with this ID!' });
            return;
        }
        
        res.status(200).json(fontData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;