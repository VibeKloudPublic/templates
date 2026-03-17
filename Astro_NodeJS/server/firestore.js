const admin = require('firebase-admin');
if (!admin.apps.length) {
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  admin.initializeApp(key ? { credential: admin.credential.cert(JSON.parse(key)) } : {});
}
module.exports = admin.firestore();
