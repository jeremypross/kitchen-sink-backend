const fetch = require('node-fetch');
const Yummly = {};

// environment variables
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

// first fetch GET request to get array of recipe search results - passing search input as parameter
Yummly.getRecipes = (search) => {
  console.log("search term:", search)
  return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${APP_KEY}&q=${search}&requirePictures=true`);
}

// second fetch GET request to get detailed info on that recipe - passing the recipe id from first GET request as parameter
Yummly.getRecipeInfo = (recipe) => {
  console.log("Yummly service, recipe id:", recipe);
  return fetch(`http://api.yummly.com/v1/api/recipe/${recipe}?_app_id=${APP_ID}&_app_key=${APP_KEY}`);
}


module.exports = Yummly;
