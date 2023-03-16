import { CartItem } from '../lib/Cart';

interface Cart {
    items: (CartItem & { total: number })[];
    total: number;
}

interface CartTableProps {
    cartItems: CartItem[];
}

const formatCurrency = (value: number): string => {
    return '$' + value.toFixed(2);
}

const buildCart = (cartItems: CartItem[]): Cart => {
    let total = 0.0;
    const items = [];
    for (const cartItem of cartItems) {
        const itemTotal = cartItem.product.price * cartItem.quantity;
        total += itemTotal;
        items.push({ ...cartItem, total: itemTotal });
    }

    return { items, total }
}

const CartTable: React.FC<CartTableProps> = ({ cartItems }) => {
    const cart = buildCart(cartItems);
    return (
        <table>
            <thead>
                <tr>
                    <th className="px-4 py-2" >Product</th>
                    <th className="px-4 py-2" >Price</th>
                    <th className="px-4 py-2" >Quantity</th>
                    <th className="px-4 py-2" >Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.items.map((cartItem) => (
                        <tr key={cartItem.id}>
                            <td className="px-4 py-2">{cartItem.product.title}</td>
                            <td className="px-4 py-2 text-right">{formatCurrency(cartItem.product.price)}</td>
                            <td className="px-4 py-2 text-right">{cartItem.quantity}</td>
                            <td className="px-4 py-2 text-right">{formatCurrency(cartItem.total)}</td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <th className="px-4 py-2 text-left" >Total</th>
                    <th />
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="px-4 py-2 text-right">{formatCurrency(cart.total)}</th>
                </tr>
            </tfoot>
        </table >
    )
}

export default CartTable