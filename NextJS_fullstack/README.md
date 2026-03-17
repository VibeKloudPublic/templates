# NextJS + Node.js + Firestore fullstack app

This app includes:
- A Next.js frontend with:
  - `/` page to create product
  - `/products` page to list products
- A Node.js (Express) backend API:
  - `POST /api/products`
  - `GET /api/products`
- Firestore integration using Firebase Admin SDK

## Environment variables

- `PORT` (optional): defaults to `8080`
- `FIREBASE_SERVICE_ACCOUNT_KEY` (optional but recommended for local/dev): JSON string for service account key

On GCP Cloud Run, if the service account attached to Cloud Run has Firestore access, the app can also rely on Application Default Credentials and skip `FIREBASE_SERVICE_ACCOUNT_KEY`.

## Run locally

```bash
npm install
npm run dev
```

## Build and run production

```bash
npm install
npm run build
npm start
```

## Docker build/run

```bash
docker build -t nextjs-fullstack-firestore .
docker run -p 8080:8080 -e FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}' nextjs-fullstack-firestore
```
