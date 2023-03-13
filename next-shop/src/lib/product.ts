export interface Product {
  id: number;
  title: string;
}

const stripProduct = (product: any) => {
  const { id, title } = product;
  return {
    id,
    title,
  };
};

export const getProducts = async () => {
  const response = await fetch("http://localhost:1337/products");
  const products = await response.json();

  return products.map(stripProduct);
};
