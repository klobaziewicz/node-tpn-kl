const Pool = require("pg").Pool
const { Client } = require('pg');

const pool = new Pool({
  user: 'zcozoigt',
  host: 'dumbo.db.elephantsql.com',
  database: 'zcozoigt',
  password: '2AnzqjMTtyqvuBW5aJTQXOsw_WPVD-Ka',
  port: 5432,
  ssl: {
    "require": true,
    rejectUnauthorized: false
  },
  dialect: 'postgres',
  /*
  dialectOptions: {
    "ssl": {"require":true }
  },
  logging: false,
  tls: {
      rejectUnauthorized: false
    }
  */
})

const client = new Client({
  user: 'zcozoigt',
  host: 'dumbo.db.elephantsql.com',
  database: 'zcozoigt',
  password: '2AnzqjMTtyqvuBW5aJTQXOsw_WPVD-Ka',
  port: 5432,
  ssl: {
    "require": true,
    rejectUnauthorized: false
  },
  dialect: 'postgres',
  /*
  dialectOptions: {
    "ssl": { "require": true }
  },
  logging: false,
  tls: {
    rejectUnauthorized: false
  }
  */
});


module.exports = { pool, client }