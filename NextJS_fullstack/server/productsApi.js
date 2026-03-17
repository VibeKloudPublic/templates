const express = require('express');
const { initializeFirestore } = require('../lib/firestore');

const router = express.Router();

router.get('/products', async (_req, res) => {
  try {
    const db = initializeFirestore();
    const snapshot = await db.collection('products').orderBy('createdAt', 'desc').get();

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return res.status(500).json({ message: 'Failed to fetch products.' });
  }
});

router.post('/products', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'name and description are required.' });
  }

  try {
    const db = initializeFirestore();
    const payload = {
      name,
      description,
      createdAt: new Date().toISOString()
    };

    const docRef = await db.collection('products').add(payload);

    return res.status(201).json({
      id: docRef.id,
      ...payload
    });
  } catch (error) {
    console.error('Failed to create product:', error);
    return res.status(500).json({ message: 'Failed to create product.' });
  }
});

module.exports = router;
