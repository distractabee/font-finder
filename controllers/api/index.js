const router = require('express').Router();
const fontRoutes = require('./fontRoutes');
const userRoutes = require('./userRoutes');

router.use('/fonts', fontRoutes);
router.use('/user', userRoutes);

module.exports = router;