const router     = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.post('/', controller.create);

router.post('/:id/:user_id', controller.update);

router.delete('/:id/:user_id', controller.destroy);


module.exports = router;
