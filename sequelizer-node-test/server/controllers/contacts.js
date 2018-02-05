const Contacts = require('../models').Contacts;

module.exports = {
  create(req, res) {
    return Contacts
      .create(req.body.contact)
      .then(Contacts => res.status(201).send(Contacts))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Contacts
      .findAll()
      .then(Contacts => res.status(200).send(Contacts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Contacts
      .findById(req.params.ContactsId)
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
    return Contacts
      .findById(req.params.ContactsId)
      .then(Contacts => {
        if (!Contacts) {
          return res.status(404).send({
            message: 'Contacts Not Found',
          });
        }
        return Contacts
          .update(req.body.contact)
          .then(() => res.status(200).send(Contacts))  // Send back the updated Contacts.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Contacts
      .findById(req.params.ContactsId)
      .then(Contacts => {
        if (!Contacts) {
          return res.status(400).send({
            message: 'Contacts Not Found',
          });
        }
        return Contacts
          .destroy()
          .then(() => res.status(204).send({message: "The contact was succesfully deleted"}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};