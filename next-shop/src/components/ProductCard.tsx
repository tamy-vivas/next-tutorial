import Link from "next/link"
import { PropsWithChildren } from 'react';
import { Product } from '../lib/product';

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border my-4 w-80 shadow hover:shadow-xl">
            <Link href={`/products/${product.id}`}>
                <img src="https://dummyimage.com/320x240" alt="" />
                <div className="p-2 flex justify-between items-baseline">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <span>{product.price}</span>
                </div>

            </Link>
        </div>
    )
}


export default ProductCard