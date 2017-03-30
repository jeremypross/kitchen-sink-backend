const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/new', controller.new);

// need this to point to /signup route when connecting react front end
router.post('/login', controller.login);

router.post('/signup', controller.create);



module.exports = router;
