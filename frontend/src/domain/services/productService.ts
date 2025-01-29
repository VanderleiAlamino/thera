import axios from "axios";
import { IProduct, IProductResponse } from "@/application/interfaces/product";

const BASE_URL = "http://localhost:3000/products";

class ProductService {
  async fetchProducts(): Promise<IProductResponse[]> {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar produtos: " + error);
    }
  }

  async createProduct(product: IProduct): Promise<IProductResponse> {
    try {
      const response = await axios.post(BASE_URL, product);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar produto: " + error);
    }
  }

}

export default new ProductService();
