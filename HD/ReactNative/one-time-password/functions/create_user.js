const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad input' });
  }
  // Format to remove dashes and parenthesis
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // Create a new user account using that number
  admin.auth().createUser({ uid: phone })
    .then((user) => res.send(user))
    .catch((err) => res.status(422).send({ error: err }));

  // Respond to request saying user was created
};
