import React, { useEffect, useState, useCallback } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { ButtonTypes } from "@/application/enums/button";
import { InputTypes } from "@/application/enums/input";
import { RandomNumber } from "@/infrastructure/utils/random";
import { IProductProps } from "@/application/interfaces/product";
import { useRouter } from "next/router";
import productService from "@/domain/services/productService";
import FORMSTYLES from "@/infrastructure/utils/formStyles";

const useProductForm = (edit: boolean, id?: string) => {
  const [product, setProduct] = useState({
    id: RandomNumber(),
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const fetchProduct = useCallback(async () => {
    if (edit && id) {
      setLoading(true);
      try {
        const data = await productService.findOne(id);
        if (data) {
          setProduct({
            id: data.id,
            name: data.name || "",
            category: data.category || "",
            price: data.price || 0,
            description: data.description || "",
            image: data.image || "",
          });
        }
      } catch {
        setErrorMessage("Erro ao buscar produto.");
      } finally {
        setLoading(false);
      }
    }
  }, [edit, id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (edit && id) {
        await productService.updateProduct(id, product);
        setModalMessage("Produto atualizado com sucesso!");
      } else {
        await productService.createProduct(product);
        setModalMessage("Produto cadastrado com sucesso!");
      }
      
      setProduct({
        id: RandomNumber(),
        name: "",
        category: "",
        price: 0,
        description: "",
        image: "",
      });
    } catch {
      setModalMessage("Erro ao salvar o produto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    product,
    loading,
    modalMessage,
    handleChange,
    handleSubmit,
    setModalMessage,
  };
};

const FormProduct: React.FC<IProductProps> = ({ modal, edit }) => {
  const router = useRouter();
  const { id } = router.query;

  const {
    product,
    loading,
    modalMessage,
    handleChange,
    handleSubmit,
    setModalMessage,
  } = useProductForm(typeof edit === "boolean", typeof id === "string" ? id : undefined);

  const handleModalMessage = (message: string) => {
    if (modal) {
      modal(message);
      setModalMessage("");
    }
  };

  useEffect(() => {
    if (modalMessage) {
      handleModalMessage(modalMessage);
      
      if (edit && modalMessage === "Produto atualizado com sucesso!") {
        router.push("/products");
      }
    }
  }, [modalMessage, handleModalMessage, edit, router]);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
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
      )}
    </>
  );
};

export default FormProduct;
