import React from "react";
import ProductImage from "../atoms/ProductImage";
import Text from "../atoms/Text";
import { IProduct } from "@/application/interfaces/product";
import { TagTypes } from "@/application/enums/tags";
import EditIcon from "../atoms/EditIcon";
import DeleteIcon from "../atoms/DeleteIcon";


const BoxProduct: React.FC<{product: IProduct;}> = ({product}) => {

    const handleEdit = () => {
        // Lógica para editar o produto
        console.log("Editar produto:", product.id);
    };

    const handleDelete = () => {
        // Lógica para deletar o produto
        console.log("Deletar produto:", product.id);
    };

    return (        
        <div key={product.id} className="border p-4 rouded-lg shadow-md relative">           
            
            <div className="absolute top-2 right-2 flex space-x-2">
                <button
                    onClick={handleEdit}
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="Editar produto"
                >
                    <EditIcon />
                </button>
                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Deletar produto"
                >
                    <DeleteIcon />
                </button>
            </div>

            <ProductImage product={product} />							
            <Text className="text-x1 font-semibold" tag={TagTypes.Heading1}> {product.name} </Text>
            <Text className="text-gray-600"> {product.category} </Text>
            <Text className="text-gray-800 font-bold"> {product.price.toFixed(2)} </Text>
            <Text className="text-gray-700 mt-2"> {product.description} </Text>
        </div>
    )
}

export default BoxProduct;
