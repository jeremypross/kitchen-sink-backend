const Yummly = require('../../services/yummly.js');

let controller = {};

// first fetch call in services/yummly.js - search input bar
controller.getRecipes = (req, res) => {
  console.log('query parameter in api controller', req.params.search);
  Yummly
    // pass search parameter to getRecipes fetch call
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

// second fetch call - more info button
controller.getRecipeInfo = (req, res) => {
  console.log("recipe id:", req.params.id)
  Yummly
    .getRecipeInfo(req.params.id)
    .then(r => r.json())
    .then((data) => {
      res.json(data)
      console.log("getRecipeInfo data:", data);
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    })
}

module.exports = controller;
