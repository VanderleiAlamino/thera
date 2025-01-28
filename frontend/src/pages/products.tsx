import MainTemplate from "@/components/templates/MainTemplate";
import { mockProducts } from "@/domain/mocks/mockProducts";
import React from "react";

const Products: React.FC = () => {
	return (
		<MainTemplate>
			<h1 className="text-2x1 font-bold mb-4">Produtos</h1>

			<div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-4">
				{
					mockProducts.map((product) => (
						<div key={product.id} className="border p-4 rouded-lg shadow-md">
							<img 
								src={product.image}
								alt={product.name}
								className="w-full h-48 object-cover mb-4 rouded"
							/>

							<h2 className="text-x1 font-semibold">{product.name}</h2>
							<p className="text-gray-600">{product.category}</p>
							<p className="text-gray-800 font-bold">R$ {product.price.toFixed(2)}</p>
							<p className="text-gray-700 mt-2">{product.category}</p>
						</div>
					))
				}
			</div>
		</MainTemplate>
	)
}

export default Products;
