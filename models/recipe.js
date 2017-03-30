const db = require('../config/db');

const Recipe = {};

Recipe.create = (recipe) => {
  return db.none(`
    INSERT INTO recipes
    (title, ingredients, image_url, cook_time, user_id)
    VALUES
    ($1, $2, $3, $4, $5)`,
    [
      recipe.title,
      recipe.ingredients,
      recipe.image_url,
      recipe.cook_time,
      recipe.user_id]
  );
}

module.exports = Recipe;
