import React from "react";
import BoxProduct from "../molecules/BoxProduct";
import { IProduct } from "@/application/interfaces/product";

const ProductList: React.FC<{products: IProduct[];}> = ({products}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-4">
            {
                products.map((product) => (
                    <BoxProduct product={product} />						
                ))
            }
        </div>
    )
}

export default ProductList;
