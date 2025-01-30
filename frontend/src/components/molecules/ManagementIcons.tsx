import React from "react";
import Link from "next/link";
import EditIcon from "../atoms/EditIcon";
import Button from "../atoms/Button";
import DeleteIcon from "../atoms/DeleteIcon";
import { IProduct } from "@/application/interfaces/product";

const ManagementIcons: React.FC<{product: IProduct; handleDelete: () => void}> = ({handleDelete, product}) => {
    return (
        <div className="absolute top-2 right-2 flex space-x-2 bg-black bg-opacity-90 p-2 rounded-lg">
            <Link 
                href={`/edit-product/${product._id}`} 
                className="bg-white rounded-full p-2 text-blue-500 hover:text-blue-700 flex items-center justify-center"
            >
                <EditIcon />                    
            </Link>
            <Button
                onClick={handleDelete}
                className="bg-white rounded-full p-2 flex items-center justify-center text-red-500 hover:text-red-700"
                aria-label="Deletar produto"
            >
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default ManagementIcons;
