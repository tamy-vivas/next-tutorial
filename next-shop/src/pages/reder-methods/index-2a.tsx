//Option 2: fetch products on the client side
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { Product, getProducts } from '../lib/product';

const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);

    })();
  }, [])



  console.log('[HomePage] render: ', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {
            products.map((product: Product) => (<li key={product.id}>{product.title}</li>))
          }
        </ul>
      </main>
    </>
  )
}

export default Home;