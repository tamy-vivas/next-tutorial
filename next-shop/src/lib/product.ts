export interface Product {
  id: number;
  title: string;
  description: string;
  price?: 7.5;
  picture?: {
    name: string;
    formats: {
      thumbnail: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
}

const stripProduct = (product: any): Product => {
  const { id, title, description } = product;
  return {
    id,
    title,
    description,
  };
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`http://localhost:1337/products/${id}`);
  console.log("------------>", response);
  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`);
  }
  const product = await response.json();

  return stripProduct(product);
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:1337/products");
  const products = await response.json();

  return products.map(stripProduct);
};
