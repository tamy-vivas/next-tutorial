import { fetchJson } from "./api";

const CMS_URL: string = "http://localhost:1337";

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
  const product = await fetchJson(`${CMS_URL}/products/${id}`);

  return stripProduct(product);
};

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/products`);

  return products.map(stripProduct);
};
