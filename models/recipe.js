const db = require('../config/db');

const Recipe = {};

Recipe.create = (recipe) => {
  return db.none(`
    INSERT INTO recipes
    ( title,
      ingredients,
      image_url,
      cook_time,
      source,
      source_url,
      comment,
      user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      recipe.title,
      recipe.ingredients,
      recipe.image_url,
      recipe.cook_time,
      recipe.source,
      recipe.source_url,
      recipe.comment,
      recipe.user_id]
  );
}

Recipe.findByUserEmail = (email) => {
  return db.query(
    `SELECT
      recipes.id,
      recipes.title,
      recipes.ingredients,
      recipes.image_url,
      recipes.cook_time,
      recipes.source,
      recipes.source_url,
      recipes.comment,
      recipes.user_id,
      users.first_name,
      users.last_name,
      users.email
    FROM recipes
    LEFT OUTER JOIN users
    ON users.id = recipes.user_id
    WHERE email = $1`,
    [email]
  );
}

Recipe.findAll = () => {
  return db.query(
    `SELECT * FROM recipes`
  )
}

Recipe.update = (comment, user_id, recipe_id) => {
  return db.none(`
    UPDATE recipes
    SET comment = $1
    WHERE id = $2`,
    [comment, user_id, recipe_id]
  )
}

Recipe.delete = (recipeId, userId) => {
  return db.none(
    `DELETE FROM recipes
     WHERE id = $1 AND user_id = $2`,
     [recipeId, userId]
  );
}

module.exports = Recipe;
