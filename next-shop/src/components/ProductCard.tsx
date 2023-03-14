import Link from "next/link"
import { PropsWithChildren } from 'react';
import { Product } from '../lib/product';

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border  w-80 shadow hover:shadow-xl">
            <Link href={`/products/${product.id}`}>
                <img src={product.pictureURL} alt="" />
                <div className="p-2 flex justify-between items-baseline">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <span>{product.price}</span>
                </div>

            </Link>
        </div>
    )
}


export default ProductCard