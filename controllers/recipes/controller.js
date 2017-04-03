const Recipe = require('../../models/recipe');

const controller = {};

controller.index = (req, res) => {
  Recipe
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

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

controller.update = (req, res) => {
  Recipe
    .update(req.body.comment, req.params.id, req.params.user_id)
    .then((data) => {
      console.log("REQ.BODY.COMMENT", req.body.comment);
      console.log('COMMENT / UPDATE FIRING');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

controller.destroy = (req, res) => {
  Recipe
    .delete(req.params.id, req.params.user_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('DELETE ERROR *******', err);
    })
}


module.exports = controller;
