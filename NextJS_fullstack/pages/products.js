import Link from 'next/link';

export default function ProductsPage({ products, error }) {
  return (
    <main className="container">
      <h1>Product List</h1>
      {error && <p>{error}</p>}

      {!error && products.length === 0 && <p>No products found.</p>}

      <ul className="card list">
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>

      <Link href="/">Create Another Product</Link>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;

  try {
    const response = await fetch(`${protocol}://${host}/api/products`);

    if (!response.ok) {
      throw new Error('Failed to load products.');
    }

    const products = await response.json();

    return {
      props: {
        products
      }
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: error.message
      }
    };
  }
}
