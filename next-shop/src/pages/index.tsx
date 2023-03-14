//Option 1b: fetch products on the server side 
//with Incremental Static Regeneration (in getStaticProps)
import ProductCard from '@/components/ProductCard';
import Head from 'next/head'
import Title from '../components/Title';
import { Product, getProducts } from '../lib/product';


export const getStaticProps = async () => {
  console.log('[HomePage] getStaticProps');

  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS || '300'), //seconds
  }
}

interface HomePageProps {
  products: Product[];
}

const Home: React.FC<HomePageProps> = ({ products }) => {
  console.log('[HomePage] render: ', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))
          }
        </ul>
      </main>
    </>
  )
}

export default Home;