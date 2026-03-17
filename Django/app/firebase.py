import os
import json
import firebase_admin
from firebase_admin import credentials, firestore

if not firebase_admin._apps:
    service_account = os.getenv('FIREBASE_SERVICE_ACCOUNT_KEY')
    if service_account:
        cred = credentials.Certificate(json.loads(service_account))
        firebase_admin.initialize_app(cred)
    else:
        firebase_admin.initialize_app()

db = firestore.client()
