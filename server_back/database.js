/* eslint-disable no-console */
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

const client = new Pool(dbParams);

(async () => {
  await client.connect();
})();

// eslint-disable-next-line quotes
client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database successfully');
  }
  // client.end();
});

module.exports = client;
