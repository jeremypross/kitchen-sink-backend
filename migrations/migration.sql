BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS comments;

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
  cook_time TEXT,
  source VARCHAR(255),
  source_url VARCHAR(255),
  comment TEXT,
  user_id INTEGER REFERENCES users(id)
);


COMMIT;
