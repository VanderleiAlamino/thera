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
import { Range } from "react-range";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProductResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [maxPrice, setMaxPrice] = useState<number>(6000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ProductService.fetchProducts();
        setProducts(fetchedProducts);

        const maxPrice = Math.max(...fetchedProducts.map((product) => product.price));
        setMaxPrice(maxPrice);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (values: number[]) => {
    if (values.length === 2) {
      setPriceRange(values as [number, number]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesName && matchesPrice;
  });

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

      <div className="mb-4">
        <label className={FORMSTYLES.label} htmlFor="priceRange">
          Faixa de Preço: {priceRange[0]} - {priceRange[1]}
        </label>
        <Range
          step={1}
          min={0}
          max={maxPrice} 
          values={priceRange}
          onChange={handlePriceRangeChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "4px",
                backgroundColor: "#ccc",
                borderRadius: "2px",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#000",
              }}
            />
          )}
        />
      </div>

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
