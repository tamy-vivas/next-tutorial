import type { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../lib/product";

//This is a like a proxy call
//It's an intermediate API to prevent request info in browsers
const handleRevalidate = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const event = req.body;
  if (event.model === "product") {
    const id = event.entry.id;

    await Promise.all([res.revalidate("/"), res.revalidate(`/products/${id}`)]);
    console.log("[api/revalidate] revalidated id", id);
  }
  res.status(204).end();
};

export default handleRevalidate;
