import { TagTypes } from "@/application/enums/tags";
import Text from "@/components/atoms/Text";
import ProductList from "@/components/organisms/ProductList";
import MainTemplate from "@/components/templates/MainTemplate";
import { mockProducts } from "@/domain/mocks/mockProducts";
import React from "react";

const Products: React.FC = () => {
	return (
		<MainTemplate>
			<Text className="text-2x1 font-bold mb-4" tag={TagTypes.Heading1}>Produtos</Text>
			<ProductList products={mockProducts} />
		</MainTemplate>
	)
}

export default Products;
