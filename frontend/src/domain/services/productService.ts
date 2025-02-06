import axios from "axios";
import { IProduct, IProductResponse } from "@/application/interfaces/product";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

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

  async findOne(id: string): Promise<IProductResponse> {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar produto com ID ${id}: ${error}`);
    }
  }

  async updateProduct(id: string, product: IProduct): Promise<IProductResponse> {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, product);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar produto com ID ${id}: ${error}`);
    }
  }  

  async delete(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      throw new Error(`Erro ao excluir produto com ID ${id}: ${error}`);
    }
  }

  async searchProductsByName(name: string): Promise<IProductResponse[]> {
    try {
      const response = await axios.get(`${BASE_URL}?name_like=${name}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar produtos pelo nome: " + error);
    }
  }
}

export default new ProductService();
