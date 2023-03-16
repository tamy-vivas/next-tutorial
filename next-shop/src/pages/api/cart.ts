import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";
import { CartItem } from "../../lib/Cart";

const CMS_URL: string = process.env.CMS_URL || "http://localhost:1337";

const stripCartItem = (cartItem: any): CartItem => {
  return {
    id: cartItem.id,
    product: {
      id: cartItem.product.id,
      title: cartItem.product.title,
      price: cartItem.product.price,
    },
    quantity: cartItem.quantity,
  };
};

const handler: NextApiHandler<CartItem[]> = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }

  try {
    const cartItems = await fetchJson(`${CMS_URL}/cart-items`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    res.status(200).json(cartItems.map(stripCartItem));
  } catch (error) {
    res.status(401).end();
  }
};

export default handler;
