import type { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../lib/product";

interface Data {
  name: string;
}

//This is a like a proxy call
//It's an intermediate API to prevent request info in browsers
const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log("[api/products] handler");
  const products = await getProducts();
  res.status(200).json(products);
};

export default handler;
