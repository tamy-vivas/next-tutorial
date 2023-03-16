import Page from '../components/Page';
import { useQuery } from 'react-query';
import { CartItem } from '../lib/Cart';
import { fetchJson } from '../lib/api';
import CartTable from '@/components/CartTable';

const CartPage: React.FC = () => {
    const query = useQuery<CartItem[]>('cartItems', () => fetchJson('api/cart'));
    const cartItems = query.data;

    console.log(cartItems)
    return (
        <Page title="Cart">

            {cartItems && <CartTable cartItems={cartItems} />}
        </Page>
    )
}

export default CartPage;