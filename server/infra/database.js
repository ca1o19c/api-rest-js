const pgp = require('pg-promise')();
require('dotenv/config');

const db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME
});

module.exports = db;
