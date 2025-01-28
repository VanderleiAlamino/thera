import React from "react";
import ProductImage from "../atoms/ProductImage";
import Text from "../atoms/Text";
import { IProductProps } from "@/application/interfaces/product";
import { TagTypes } from "@/application/enums/tags";

const BoxProduct: React.FC<IProductProps> = ({product}) => {
    return (        
        <div key={product.id} className="border p-4 rouded-lg shadow-md">
            <ProductImage product={product} />							
            <Text className="text-x1 font-semibold" tag={TagTypes.Heading1}> {product.name} </Text>
            <Text className="text-gray-600"> {product.category} </Text>
            <Text className="text-gray-800 font-bold"> {product.price.toFixed(2)} </Text>
            <Text className="text-gray-700 mt-2"> {product.description} </Text>
        </div>
    )
}

export default BoxProduct;
