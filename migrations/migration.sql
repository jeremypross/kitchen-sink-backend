BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recipes;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  ingredients TEXT,
  image_url VARCHAR(255),
  cook_time INTEGER,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  comment TEXT,
  rating INTEGER,
  recipe_id INTEGER REFERENCES recipes(id),
  user_id INTEGER REFERENCES users(id)
);

COMMIT;
