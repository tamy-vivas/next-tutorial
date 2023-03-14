//Option 1: fetch products on the server side (in getStaticProps)
import Head from 'next/head'
import Title from '../../components/Title';
import { Product, getProducts } from '../../lib/product';


export const getStaticProps = async () => {
  console.log('[HomePage] getStaticProps');

  const products = await getProducts();
  return {
    props: { products }
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
        <ul>
          {
            products.map((product) => (<li key={product.id}>{product.title}</li>))
          }
        </ul>
      </main>
    </>
  )
}

export default Home;