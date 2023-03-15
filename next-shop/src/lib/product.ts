import { fetchJson } from "./api";

const CMS_URL: string = process.env.CMS_URL || "http://localhost:1337";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  pictureURL: string;
}

const stripProduct = (product: any): Product => {
  const { id, title, description, price, picture } = product;
  return {
    id,
    title,
    description,
    price: "$ " + price.toFixed(2),
    pictureURL: CMS_URL + picture.url,
  };
};

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(`${CMS_URL}/products/${id}`, null);

  return stripProduct(product);
};

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/products`, null);

  return products.map(stripProduct);
};
