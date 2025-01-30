import React, { useEffect, useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import ProductService from "@/domain/services/productService";
import { ButtonTypes } from "@/application/enums/button";
import { InputTypes } from "@/application/enums/input";
import { RandomNumber } from "@/infrastructure/utils/random";
import { IProductProps, IProductResponse } from "@/application/interfaces/product";
import { useRouter } from "next/router";
import productService from "@/domain/services/productService";
import FORMSTYLES from "@/infrastructure/utils/formStyles";

const FormProduct: React.FC<IProductProps> = ({ modal, edit }) => {
  const router = useRouter();
  const { id } = router.query;  

  const RANDOM_ID = RandomNumber();
  const [productEdit, setProductEdit] = useState<IProductResponse | null>(null);
  const [product, setProduct] = useState({
    id: RANDOM_ID,
    _id: "",
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

  useEffect(() => {
    if (typeof id === "string" && edit) { 
      productService.findOne(id)
        .then((data) => {
          if (data) {
            setProductEdit(data);
          }
        })
        .catch(() => {          
          console.error("Erro ao buscar produto")
        });
      
    }        
  }, [id, edit]);

  useEffect(() => {
    if (productEdit && edit) {
      setProduct({
        id: productEdit.id ?? RANDOM_ID,
        _id: productEdit._id || "",
        name: productEdit.name || "",
        category: productEdit.category || "",
        price: productEdit.price || 0,
        description: productEdit.description || "",
        image: productEdit.image || "",
      });
    }
  }, [productEdit, edit]);

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
      if (edit) {
        await ProductService.updateProduct(product._id, product);
        modal("Produto atualizado com sucesso!");
      } else {
        await ProductService.createProduct(product);
        modal("Produto cadastrado com sucesso!");
      }
    } catch (error) {
      modal("Erro ao salvar o produto. Tente novamente.");
    }
  };


  return (
    <>    
      <form onSubmit={handleSubmit}>
        <InputGroup
          className="mb-4"
          label={{ htmlFor: "name", children: "Produto", className: FORMSTYLES.label }}
          input={{
            id: "name",
            name: "name",
            required: true,
            value: product.name,
            onChange: handleChange,
            className: FORMSTYLES.input,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ htmlFor: "category", children: "Categoria", className: FORMSTYLES.label }}
          input={{
            id: "category",
            name: "category",
            required: true,
            value: product.category,
            onChange: handleChange,
            className: FORMSTYLES.input,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ htmlFor: "price", children: "Preço", className: FORMSTYLES.label }}
          input={{
            id: "price",
            name: "price",
            required: true,
            type: InputTypes.Number,
            value: product.price,
            onChange: handleChange,
            className: FORMSTYLES.input,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ htmlFor: "description", children: "Descrição", className: FORMSTYLES.label }}
          input={{
            id: "description",
            name: "description",
            required: true,
            value: product.description,
            onChange: handleChange,
            className: FORMSTYLES.input,
          }}
        />

        <InputGroup
          className="mb-4"
          label={{ htmlFor: "image", children: "Imagem", className: FORMSTYLES.label }}
          input={{
            id: "image",
            name: "image",
            required: true,
            value: product.image,
            onChange: handleChange,
            className: FORMSTYLES.input,
            placeholder: "Url da Imagem",
          }}
        />

        <Button type={ButtonTypes.Submit} className={FORMSTYLES.button}>
          {edit ? "Atualizar" : "Enviar"}
        </Button>
      </form>
    </>
  );
};

export default FormProduct;
