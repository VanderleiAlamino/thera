import React from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { ButtonTypes } from "@/application/enums/button";

const FormProduct = () => {  

  return (
    <form>
      <InputGroup
        className="mb-4"
        label={{ 
          htmlFor: "product", 
          children: "Produto", 
          className: "block text-sm font-medium text-gray-700" 
        }}
        input={{ 
          id: "product", 
          name: "product", 
          required: true, 
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
          type: "number",
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
  );
};

export default FormProduct;
