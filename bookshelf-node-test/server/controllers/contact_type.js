const ContactType = require('../models/contact_type');

module.exports = {
  list(req, res) {
    return ContactType
      .collection()
      .fetch()
      .then(ContactType => res.status(200).send(ContactType))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return ContactType
      .where({ id: req.params.ContactTypeId })
      .fetch()
      .then(ContactType => {
        if (!ContactType) {
          return res.status(404).send({
            message: 'ContactType Not Found',
          });
        }
        return res.status(200).send(ContactType);
      })
      .catch(error => res.status(400).send(error));
  },
};