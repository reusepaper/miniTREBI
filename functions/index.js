// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.home = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("home");
  });
});

exports.post = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("post");
  });
});

exports.portfolio = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("portfolio");
  });
});

exports.creatpost = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("creatpost");
  });
});

exports.login = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("login");
  });
});
exports.logout = functions.https.onRequest((req, res) => {
  cors(request, response, () => {
    res
      .set({ "Access-Control-Allow-Origin": "*" })
      .status(200)
      .send("logout");
  });
});
