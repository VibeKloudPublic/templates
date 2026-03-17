const admin = require('firebase-admin');

if (!admin.apps.length) {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccountJson) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccountJson))
    });
  } else {
    admin.initializeApp();
  }
}

module.exports = admin.firestore();
