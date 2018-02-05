const Contacts = require('../models/contact');

module.exports = {
  create(req, res) {
    return Contacts
      .forge(req.body.contact)
      .save()
      .then(Contacts => res.status(201).send(Contacts))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Contacts
      .collection()
      .fetch()
      .then(Contacts => res.status(200).send(Contacts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Contacts
      .where({ id: req.params.ContactsId })
      .fetch()
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
      .forge({ id: req.params.ContactsId })
      .save(req.body.contact, { method: 'update', patch: true })
      .then(con => res.status(200).send(con))  // Send back the updated Contacts.
      .catch((error) => {
        console.log(error);
        res.status(400).send(error)
      });
  },
  destroy(req, res) {
    return Contacts
      .forge({ id: req.params.ContactsId })
      .destroy()
      .then(() => res.status(204).send({ message: "The contact was succesfully deleted" }))
      .catch(error => res.status(400).send(error));
  },
};