import React, { useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import ProductService from "@/domain/services/productService";
import { ButtonTypes } from "@/application/enums/button";
import { InputTypes } from "@/application/enums/input";
import { RandomNumber } from "@/infrastructure/utils/random";

const FormProduct: React.FC<{ modal: (message: string) => void }> = ({ modal }) => {
  const INPUT_CLASS_NAME = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const LABEL_CLASS_NAME = "block text-sm font-medium text-gray-700";
  const BUTTON_CLASS_NAME = "w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const RANDOM_ID = RandomNumber();

  const [product, setProduct] = useState({
    id: RANDOM_ID,
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

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
      modal("Produto cadastrado com sucesso!");
    } catch (error) {
      modal("Erro ao cadastrar o produto. Tente novamente.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "name",
            children: "Produto",
            className: LABEL_CLASS_NAME,
          }}
          input={{
            id: "name",
            name: "name",
            required: true,
            value: product.name,
            onChange: handleChange,
            className: INPUT_CLASS_NAME,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "category",
            children: "Categoria",
            className: LABEL_CLASS_NAME,
          }}
          input={{
            id: "category",
            name: "category",
            required: true,
            value: product.category,
            onChange: handleChange,
            className: INPUT_CLASS_NAME,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "price",
            children: "Preço",
            className: LABEL_CLASS_NAME,
          }}
          input={{
            id: "price",
            name: "price",
            required: true,
            type: InputTypes.Number,
            value: product.price,
            onChange: handleChange,
            className: INPUT_CLASS_NAME,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "description",
            children: "Descrição",
            className: LABEL_CLASS_NAME,
          }}
          input={{
            id: "description",
            name: "description",
            required: true,
            value: product.description,
            onChange: handleChange,
            className: INPUT_CLASS_NAME,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "image",
            children: "Imagem",
            className: LABEL_CLASS_NAME,
          }}
          input={{
            id: "image",
            name: "image",
            required: true,
            value: product.image,
            onChange: handleChange,
            className: INPUT_CLASS_NAME,
            placeholder: "Url da Imagem",
          }}
        />

        <Button type={ButtonTypes.Submit} className={BUTTON_CLASS_NAME}>
          Enviar
        </Button>
      </form>
    </>
  );
};

export default FormProduct;
