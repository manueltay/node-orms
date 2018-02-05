'use strict';

const options = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'solar',
    port: 5420,
    password: 'solarpass',
    database: 'streambeta',
    charset: 'utf8'
  }
};

const knex      = require('knex')(options); // Selects the correct DB config object for the current environment

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-uuid'));

bookshelf.plugin('registry'); // Resolve circular dependencies with relations

module.exports = bookshelf;