const admin = require('firebase-admin');

function parseServiceAccount() {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    return null;
  }

  try {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  } catch (error) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY must be valid JSON.');
  }
}

function initializeFirestore() {
  if (!admin.apps.length) {
    const serviceAccount = parseServiceAccount();

    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } else {
      admin.initializeApp();
    }
  }

  return admin.firestore();
}

module.exports = {
  initializeFirestore
};
