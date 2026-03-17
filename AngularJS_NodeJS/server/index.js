const express = require('express');
const path = require('path');
const db = require('./firestore');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/products', async (req, res) => {
  const snapshot = await db.collection('products').orderBy('createdAt', 'desc').get();
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'name and price are required' });
  }

  const ref = await db.collection('products').add({
    name,
    price: Number(price),
    createdAt: new Date().toISOString()
  });

  return res.status(201).json({ id: ref.id, name, price: Number(price) });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`AngularJS + Node server listening on ${port}`);
});
