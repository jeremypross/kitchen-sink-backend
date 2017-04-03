const db = require('../config/db');

const Comment = {};

Comment.findAllByUserId = (recipeId, userId) => {
  return db.query(`
    SELECT * FROM comments
    WHERE recipe_id = $1 AND user_id = $2`,
    [recipeId, userId]
  )
}

Comment.create = (comment, recipeId, userId) => {
  return db.query(`
    INSERT INTO comments
    (comment, rating, recipe_id, user_id)
    VALUES
    ($1, $2, $3, $4)`,
    [comment.comment,
     comment.rating,
     recipeId,
     userId]
  );
}

module.exports = Comment;
