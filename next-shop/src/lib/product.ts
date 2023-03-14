import { fetchJson } from "./api";

const CMS_URL: string = process.env.CMS_URL || "http://localhost:1337";

export interface Product {
  id: number;
  title: string;
  description: string;
  price?: string;
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
  const { id, title, description, price } = product;
  return {
    id,
    title,
    description,
    price: "$ " + product.price.toFixed(2),
  };
};

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);

  return stripProduct(product);
};

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/products`);

  return products.map(stripProduct);
};
