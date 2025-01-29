import React, { useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import ProductService from "@/domain/services/productService";
import { ButtonTypes } from "@/application/enums/button";
import { InputTypes } from "@/application/enums/input";
import { RandomNumber } from "@/infrastructure/utils/random";

const FormProduct = () => {  
  const randomId = RandomNumber();
  const [product, setProduct] = useState({
    id: randomId,
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await ProductService.createProduct(product);
      setModalMessage("Produto cadastrado com sucesso!");
    } catch (error) {
      setModalMessage("Erro ao cadastrar o produto. Tente novamente.");
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup
          className="mb-4"
          label={{ 
            htmlFor: "name", 
            children: "Produto", 
            className: "block text-sm font-medium text-gray-700" 
          }}
          input={{ 
            id: "name", 
            name: "name", 
            required: true, 
            value: product.name,
            onChange: handleChange,
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ 
            htmlFor: "category", 
            children: "Categoria", 
            className: "block text-sm font-medium text-gray-700" 
          }}
          input={{ 
            id: "category", 
            name: "category", 
            required: true, 
            value: product.category,
            onChange: handleChange,
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ 
            htmlFor: "price", 
            children: "Preço", 
            className: "block text-sm font-medium text-gray-700" 
          }}
          input={{
            id: "price",
            name: "price",
            required: true,
            type: InputTypes.Number,
            value: product.price,
            onChange: handleChange,
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ 
            htmlFor: "description", 
            children: "Descrição", 
            className: "block text-sm font-medium text-gray-700" 
          }}
          input={{ 
            id: "description", 
            name: "description", 
            required: true, 
            value: product.description,
            onChange: handleChange,
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ 
            htmlFor: "image", 
            children: "Imagem", 
            className: "block text-sm font-medium text-gray-700" 
          }}
          input={{ 
            id: "image", 
            name: "image", 
            required: true, 
            value: product.image,
            onChange: handleChange,
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500", 
            placeholder: "Url da Imagem" 
          }}
        />

        <Button 
          type={ButtonTypes.Submit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </Button>              
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default FormProduct;
