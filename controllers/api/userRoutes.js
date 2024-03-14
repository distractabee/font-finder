const router = require('express').Router();
const { Fonts } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const fontData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = fontData.id;
            req.session.logged_in = true;

            res.status(200).json(fontData);
        });
    } catch (err) {
    res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const fontData = await User.findOne({ where: {email: req.body.email}});

        if (!fontData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
                return
        }

        const validPassword = await fontData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = fontData.id;
            req.session.logged_in = true;

            res.json({ user: fontData, message: 'You are now logged in!' })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
