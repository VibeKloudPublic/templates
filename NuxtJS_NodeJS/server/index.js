const express = require('express');
const path = require('path');
const db = require('./firestore');

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res) => {
  const snap = await db.collection('products').orderBy('createdAt', 'desc').get();
  res.json(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
});

app.post('/api/products', async (req, res) => {
  const { name, price } = req.body;
  const doc = await db.collection('products').add({ name, price: Number(price), createdAt: new Date().toISOString() });
  res.status(201).json({ id: doc.id, name, price: Number(price) });
});

const webDir = path.join(__dirname, '..', 'frontend', '.output', 'public');
app.use(express.static(webDir));
app.get('*', (req, res) => res.sendFile(path.join(webDir, 'index.html')));

app.listen(process.env.PORT || 8080, () => console.log('NuxtJS + NodeJS server running'));
