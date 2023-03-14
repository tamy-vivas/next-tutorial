//Option 1b: fetch products on the server side 
//with Incremental Static Regeneration (in getStaticProps)
import ProductCard from '@/components/ProductCard';
import { Product, getProducts } from '../lib/product';
import Page from '../components/Page';


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
    <Page title="Indoor Plants">
      <ul className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        }
      </ul>
    </Page>
  )
}

export default Home;