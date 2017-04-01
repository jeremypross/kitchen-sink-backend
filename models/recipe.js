const db = require('../config/db');

const Recipe = {};

Recipe.create = (recipe) => {
  return db.none(`
    INSERT INTO recipes
    (title, ingredients, image_url, cook_time, source_url, user_id)
    VALUES
    ($1, $2, $3, $4, $5)`,
    [
      recipe.title,
      recipe.ingredients,
      recipe.image_url,
      recipe.cook_time,
      recipe.source_url,
      recipe.user_id]
  );
}

Recipe.findByUserEmail = (email) => {
  return db.query(
    `SELECT
      recipe.id,
      recipe.title,
      recipe.ingredients,
      recipe.image_url,
      recipe.cook_time,
      recipe.source_url,
      users.first_name,
      users.last_name,
      users.email,
      user_id
    FROM recipes
    LEFT OUTER JOIN users
    ON users.id = recipes.user_id
    WHERE email = $1`,
    [email]
  );
}

module.exports = Recipe;
