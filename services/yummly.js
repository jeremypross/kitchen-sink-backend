const fetch = require('node-fetch');
const Yummly = {};

// environment variables
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

// fetch call to yummly API
Yummly.getRecipes = () => {
  return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${APP_KEY}&q=salmon&requirePictures=true`);
}

module.exports = Yummly;


// Yummly.getRecipes = (query) => {
//   return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${APP_KEY}&_app_key=${APP_KEY}&q=${query}&requirePictures=true`);
// }
