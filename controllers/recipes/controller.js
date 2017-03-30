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

module.exports = controller;
