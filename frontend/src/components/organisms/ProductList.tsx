import React from "react";
import BoxProduct from "../molecules/BoxProduct";
import { IProduct } from "@/application/interfaces/product";

const ProductList: React.FC<{ products: IProduct[]; onProductDeleted: () => void; }> = ({ products, onProductDeleted }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-4">
      {
        products.map((product) => (
          <BoxProduct key={product._id} product={product} onProductDeleted={onProductDeleted} />
        ))
      }
    </div>
  );
};

export default ProductList;
