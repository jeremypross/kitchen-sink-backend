const Yummly = require('../../services/yummly.js');

let controller = {};

controller.getRecipes = (req, res) => {
  console.log('query parameter in api controller', req.query);
  Yummly
    // will need to pass search / query parameter to getRecipes fetch call
    .getRecipes()
    // convert from xml to json
    .then(r => r.json())
    // pass data into recipes object - to render in react
    .then((data) => {
      res.json(data)
      console.log(data);
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
};

module.exports = controller;
