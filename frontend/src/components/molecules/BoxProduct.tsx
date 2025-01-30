import React, { useState } from "react";
import { IProduct } from "@/application/interfaces/product";
import { TagTypes } from "@/application/enums/tags";
import ProductImage from "../atoms/ProductImage";
import Text from "../atoms/Text";
import productService from "@/domain/services/productService";
import Modal from "./Modal";
import ManagementIcons from "./ManagementIcons";

const BoxProduct: React.FC<{ product: IProduct; onProductDeleted: () => void; }> = ({ product, onProductDeleted }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");    

  const handleDelete = () => {
    if (product._id) {
      productService.delete(product._id)
        .then(() => {
          setModalMessage('Produto deletado com sucesso');
          setIsModalOpen(true);
          onProductDeleted();
        })
        .catch(() => {
          setModalMessage('Erro ao deletar o produto');
          setIsModalOpen(true);
        });
    }
  };

  return (
    <>
      <div key={product._id} className="border p-4 rounded-lg shadow-md relative">
        <ManagementIcons product={product} handleDelete={handleDelete} />
        <ProductImage product={product} />
        <Text className="text-x1 font-semibold" tag={TagTypes.Heading1}> {product.name} </Text>
        <Text className="text-gray-600"> {product.category} </Text>
        <Text className="text-gray-800 font-bold"> {product.price.toFixed(2)} </Text>
        <Text className="text-gray-700 mt-2"> {product.description} </Text>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default BoxProduct;
