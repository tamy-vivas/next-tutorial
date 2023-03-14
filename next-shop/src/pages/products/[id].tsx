import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring';
import Title from '../../components/Title';
import { Product, getProducts, getProduct } from '../../lib/product';
import { ApiError } from '../../lib/api';
import Image from 'next/image';

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
    fallback: 'blocking', //Fallback tells the server what should do when the page does not exist. False page 404 not found. 'blocking' next generate the page while the client is waiting for the response
  }
}

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params }) => {
  const id = params?.id;
  if (!id) {
    throw new Error('id not set');
  }

  try {
    const product = await getProduct(id);
    return {
      props: { product },
      //revalidate: 30, //seconds. Not needed because revalidate webhook
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return { notFound: true }

    }
    throw error
  }

};


const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  //console.log('[ProductPage] render: ', product);
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>

        <div className="flex flex-col lg:flex-row">
          <div >
            <Image src={product.pictureURL} width={640} height={480} alt="" />

          </div>
          <div className="flex-1 lg:ml-4">
            <p className="text-sm"> {product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
          </div>
        </div>


      </main>
    </>
  )
}

export default ProductPage;