const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  admin.initializeApp(serviceAccountJson ? { credential: admin.credential.cert(JSON.parse(serviceAccountJson)) } : {});
}
module.exports = admin.firestore();
