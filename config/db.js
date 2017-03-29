// connection to db

const pgp = require('pg-promise')();

const db = pgp({
  database: 'kitchen_sink_db',
  port: 5432,
  host: 'localhost'
})

module.exports = db;
