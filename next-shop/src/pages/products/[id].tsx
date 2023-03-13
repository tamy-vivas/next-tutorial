import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring';
import Title from '../../components/Title';
import { Product, getProducts, getProduct } from '../../lib/product';

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

interface ProductPageProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  console.log('[ProductPage] getStaticPaths');
  const products = await getProducts();
  return {
    paths: products.map((product: Product) => ({
      params: { id: product.id.toString() }
    })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params: { id } }) => {
  console.log('[ProductPage] getStaticProps');

  const product = await getProduct(id);
  return {
    props: { product },
    revalidate: 30, //seconds
  }
}



const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  console.log('[ProductPage] render: ', product);
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>

      </main>
    </>
  )
}

export default ProductPage;