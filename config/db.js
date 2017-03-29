// connection to db

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'kitchen_sink_db'
})

module.exports = db;
