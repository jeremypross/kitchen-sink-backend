const router = require('express').Router();
const controller = require('./controller');

router.get('/:search', controller.getRecipes);

router.get('/info/:id', controller.getRecipeInfo);

module.exports = router;
