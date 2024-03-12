const router = require('express').Router();
const sequelize = require('../config/connections');
const { Fonts, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        // Get all fonts and JSON with user data
        const fontData = await Fonts.findall({
            include: [
                {
                    model: User,
                    attributes: ["id"]
                },
            ],
        });

        // Serialize data so the template can read it
        const fonts = fontData.map((fonts) => font.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            fonts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/fonts/:id', async (req, res) => {
    try {
        const fontData = await Fonts.findByPk(req. params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const font = fontData.get({ plain: true });

        res.render('font', {
            ...font,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middledate to prevent assess to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on session ID
      const fontData = await User.findByPk(req.session.user_id, {
        attributes: {exclude: ['password']},
        include: [{ model: Fonts }],
      });

      const user = fontData.get({ plain: true });

      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;