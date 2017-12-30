const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOTP = require('./request_one_time_password');
const verifyOTP = require('./verify_one_time_password');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-5eda3.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.request_one_time_password = functions.https.onRequest(requestOTP);
exports.verify_one_time_password = functions.https.onRequest(verifyOTP);
