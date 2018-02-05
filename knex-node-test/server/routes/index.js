const contacts = require('../controllers').contacts;
//const contact_type = require('../controllers').contact_type;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bookshelf test API!',
  }));
  /**
   * Contact types for consult
  
  app.get('/api/contacts/types', contact_type.list);
  app.get('/api/contacts/type/:ContactTypeId',contact_type.retrieve);
  
  /**
   * Contacts endpoints for creation, update, delete and retrieve
   */
  app.get('/api/contacts/', contacts.list);
  app.get('/api/contacts/:ContactsId', contacts.retrieve);
  app.post('/api/contacts/', contacts.create);
  app.put('/api/contacts/:ContactsId', contacts.update);
  app.delete('/api/contacts/:ContactsId', contacts.destroy);

  
};