const ContactType = require('../models').ContactType;

module.exports = {
  list(req, res) {
    return ContactType
      .findAll()
      .then(ContactType => res.status(200).send(ContactType))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return ContactType
      .findById(req.params.ContactTypeId)
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