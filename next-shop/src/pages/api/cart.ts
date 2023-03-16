import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";
import { CartItem } from "../../lib/Cart";
import { Product } from '../../lib/product';

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

const handlerGetCart: NextApiHandler<CartItem[]> = async (
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


const handlerPostCart: NextApiHandler<CartItem[]> = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }

  const {productId, quantity} = req.body;

  try {
    await fetchJson(`${CMS_URL}/cart-items`, {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({product: productId, quantity});
    });

    res.status(200).json({});
  } catch (error) {
    res.status(401).end();
  }
};


//------------------------------------------
const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  switch(req.method){
    case 'GET':
      return handlerGetCart(req, res);
    case 'POST':
      return handlerPostCart(req, res);
    default:
      res.status(405).end();

  }

}

export default handler;
