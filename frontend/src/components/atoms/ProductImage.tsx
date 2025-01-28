import React from "react";
import { IProductProps } from "@/application/interfaces/product";

const ProductImage: React.FC<IProductProps> = ({product}) => {

    return (
        <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rouded"
        />
    )

}

export default ProductImage;
