const Recipe = require('../../models/recipe');

const controller = {};

controller.create = (req, res) => {
  Recipe
    .create(req.body.recipe)
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
}

controller.destroy = (req, res) => {
  Recipe
    .delete(req.params.id, req.params.user_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}


module.exports = controller;
