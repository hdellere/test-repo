const admin = require('firebase-admin');
const twilio = require('twilio');

const accountSid = 'AC5c058b7404ba732802ce3d0b128ca7cb';
const authToken = 'd773269760ae286a80954156099b00b3';

const client = new twilio(accountSid, authToken);

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin.auth().getUser(phone)
    .then((userRecord) => {
      const code = Math.floor((Math.random() * 8999 + 1000));

      client.messages.create({
        body: 'Your code is' + code,
        to: phone,
        from: '+13163959877',
      }, (err) => {
        if (err) { res.status(422).send({ error: err }) }

        admin.database().ref('users/' + phone)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true })
          });

      })
    })
    .catch((err) => {
      res.status(422).send({ error: err })
    });
};
