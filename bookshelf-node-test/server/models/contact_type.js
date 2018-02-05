'use strict';

const Bookshelf = require('../libs/db-bookshelf');

require('./contact');
let ContactType = Bookshelf.Model.extend({
  tableName: 'ref_contact_type',
  hasTimestamps: false,

  contacts: function() {
    return this.hasMany('Contact');
  }
});

module.exports = Bookshelf.model('ContactType', ContactType);