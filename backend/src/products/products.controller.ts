import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Criar produto
  @Post()
  async create(@Body() productData: Product) {
    return this.productsService.create(productData);
  }

  // Listar todos os produtos
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
