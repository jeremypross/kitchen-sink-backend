const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/new', controller.new);

router.post('/signup', controller.create);
router.post('/login', controller.login);


module.exports = router;
