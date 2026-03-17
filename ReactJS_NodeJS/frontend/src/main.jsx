import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const load = async () => {
    const res = await fetch('/api/products');
    setProducts(await res.json());
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price) })
    });
    setName('');
    setPrice('');
    load();
  };

  return (
    <main style={{ maxWidth: 720, margin: '2rem auto', fontFamily: 'Arial' }}>
      <h1>React + Node.js Products</h1>
      <form onSubmit={submit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" required />
        <button type="submit">Create</button>
      </form>
      <ul>{products.map((p) => <li key={p.id}>{p.name} - ${p.price}</li>)}</ul>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
