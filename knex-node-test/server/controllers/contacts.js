const knexlib = require('../lib/knex-db');
const uuid = require('uuid');

module.exports = {
  create(req, res) {
    let contact = req.body.contact;
    contact.id = contact.id || uuid.v4();
    return knexlib
      .insert(contact)
      .into('contact')
      .then(data => res.status(201).send(data))
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      });
  },
  list(req, res) {
    return knexlib.select().table('contact')
      .then(contacts => res.status(200).send(contacts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return knexlib('contact')
      .where({
        id: req.params.ContactsId
      })
      .then(Contacts => {
        if (!Contacts) {
          return res.status(404).send({
            message: 'Contacts Not Found',
          });
        }
        return res.status(200).send(Contacts);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return knexlib('contact').where({ id: req.params.ContactsId })
      .update(req.body.contact)
      .then(count => {
        res.status(200).send({message: `succesful updated ${count} row(s)`})
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error)
      });
  },
  destroy(req, res) {
    return knexlib('contact')
      .where({ id: req.params.ContactsId })
      .del()
      .then(() => res.status(204).send({ message: "The contact was succesfully deleted" }))
      .catch(error => res.status(400).send(error));
  },
};