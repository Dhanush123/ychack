import * as firebase from 'firebase';

const config = {
  apiKey: "--redacted--",
  authDomain: "--redacted--",
  databaseURL: "--redacted--",
  projectId: "--redacted--",
};

firebase.initializeApp(config);

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default db;