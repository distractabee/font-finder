// const router = require('express').Router();
// const fontRoutes = require('./fontRoutes');
// const userRoutes = require('./userRoutes');

// router.use('/fonts', fontRoutes);
// router.use('/user', userRoutes);

// module.exports = router;

const router = require('express').Router();
const fontRoutes = require('./fontRoutes');
const userRoutes = require('./userRoutes');
//const commentRoutes = require('./commentRoutes');
//const postRoutes = require('./postRoutes')
router.use('/fonts', fontRoutes);
router.use('/user', userRoutes);
//router.use('/comments', commentRoutes);
//router.use('/post',postRoutes);
module.exports = router;