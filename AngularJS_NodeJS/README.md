# AngularJS + Node.js + Firestore (Cloud Run ready)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
docker build -t angularjs-nodejs .
docker run -p 8080:8080 angularjs-nodejs
```

Set `FIREBASE_SERVICE_ACCOUNT_KEY` if running outside GCP IAM.
