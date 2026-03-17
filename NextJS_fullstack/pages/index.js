import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitProduct = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create product.');
      }

      setName('');
      setDescription('');
      setMessage('Product created successfully.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>Create Product</h1>
      <form onSubmit={submitProduct} className="card">
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="description">Product Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Create Product'}
        </button>
      </form>

      {message && <p>{message}</p>}

      <Link href="/products">View Product List</Link>
    </main>
  );
}
