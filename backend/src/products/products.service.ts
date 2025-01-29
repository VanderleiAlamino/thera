import { Injectable } from '@nestjs/common';
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
}
