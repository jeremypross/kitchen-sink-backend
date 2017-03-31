const router = require('express').Router();
const controller = require('./controller');

router.get('/:search', controller.getRecipes);

module.exports = router;
