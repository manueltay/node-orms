'use strict';

const Bookshelf = require('../libs/db-bookshelf');

require('./contact_type');
let contact = Bookshelf.Model.extend({
  tableName: 'contact',
  hasTimestamps: false,
  uuid: true,

  contact: function() {
    return this.belongsTo('ContactType');
  }
});

module.exports = Bookshelf.model('Contact', contact);