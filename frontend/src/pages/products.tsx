import { useEffect, useState } from "react";
import { IProductResponse } from "@/application/interfaces/product";
import { TagTypes } from "@/application/enums/tags";
import ProductService from "@/domain/services/productService";
import ProductList from "@/components/organisms/ProductList";
import Text from "@/components/atoms/Text";
import MainTemplate from "@/components/templates/MainTemplate";
import InputGroup from "@/components/molecules/InputGroup";
import FORMSTYLES from "@/infrastructure/utils/formStyles";
import { InputTypes } from "@/application/enums/input";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProductResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Carrega todos os produtos ao montar o componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ProductService.fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };

    fetchProducts();
  }, []);

  // Função de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtra os produtos com base no nome digitado
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Atualiza a lista de produtos após a exclusão de um produto
  const handleProductDeleted = async () => {
    try {
      const fetchedProducts = await ProductService.fetchProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  };

  return (
    <MainTemplate>
      <Text className="text-2xl font-bold mb-4" tag={TagTypes.Heading1}>
        Produtos
      </Text>

      <div className="flex justify-end mb-4">
        <InputGroup
          className="mb-4"
          label={{
            htmlFor: "search",
            children: "Pesquisar Produto",
            className: FORMSTYLES.label,
          }}
          input={{
            id: "search",
            name: "search",
            type: InputTypes.Text,
            value: searchTerm,
            onChange: handleSearchChange,
            className: FORMSTYLES.input,
            placeholder: "Digite o nome do produto",
          }}
        />
      </div>

      {/* Verifica se há produtos filtrados e exibe uma mensagem se não houver nenhum */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-red-500 font-semibold">
          Nenhum produto encontrado
        </div>
      ) : (
        <ProductList products={filteredProducts} onProductDeleted={handleProductDeleted} />
      )}
    </MainTemplate>
  );
};

export default Products;
