const router = require('express').Router();

router.use('/users', require('./controllers/users'));

router.use('/recipes', require('./controllers/recipes'));

router.use('/api', require('./controllers/api'));

module.exports = router;
