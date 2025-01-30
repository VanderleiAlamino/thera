import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(productData: Product): Promise<Product> {
    const product = new this.productModel(productData);
    return await product.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, productData, { new: true, runValidators: true })
      .exec();
  
    if (!updatedProduct) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  
    return updatedProduct;
  }
  

  async delete(id: string): Promise<void> {
    const result = await this.productModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  }
}
