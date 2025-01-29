import { useEffect, useState } from "react";
import ProductService from "@/domain/services/productService";
import ProductList from "@/components/organisms/ProductList";
import Text from "@/components/atoms/Text";
import { TagTypes } from "@/application/enums/tags";
import MainTemplate from "@/components/templates/MainTemplate";
import { IProductResponse } from "@/application/interfaces/product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProductResponse[]>([]);

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

  return (
    <MainTemplate>
      <Text className="text-2x1 font-bold mb-4" tag={TagTypes.Heading1}>
        Produtos
      </Text>
      <ProductList products={products} />
    </MainTemplate>
  );
};

export default Products;
