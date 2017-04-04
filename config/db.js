// connection to db

const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || {
  database: 'kitchen_sink_db',
  port: 5432,
  host: 'localhost'
})

module.exports = db;
