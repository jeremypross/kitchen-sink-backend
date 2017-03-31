const Yummly = require('../../services/yummly.js');

let controller = {};

controller.getRecipes = (req, res) => {
  console.log('query parameter in api controller', req.params.search);
  Yummly
    // pass search / query parameter to getRecipes fetch call
    .getRecipes(req.params.search)
    // parse response to json
    .then(r => r.json())
    // pass data into recipes object - to render in react
    .then((data) => {
      res.json(data)
      console.log("controller.getRecipes api data", data);
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
};

module.exports = controller;
