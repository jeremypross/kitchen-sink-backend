const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getRecipes);

module.exports = router;
