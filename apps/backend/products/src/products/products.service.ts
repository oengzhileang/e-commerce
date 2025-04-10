import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/products.schema';
import { Model } from 'mongoose';
import { IProducts } from './types/product.type';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  //* this function create new product
  async createProduct(createProductDto: CreateProductDto): Promise<IProducts> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  //* This function get all products
  async findAllProducts(
    page: number,
    limit: number,
  ): Promise<{ products: IProducts[]; total: number }> {
    const skip = (page - 1) * limit;
    const [products, total] = await Promise.all([
      this.productModel.find().skip(skip).limit(limit).exec(),
      this.productModel.countDocuments().exec(),
    ]);
    if (!products || products.length === 0) {
      throw new NotFoundException('Products not found');
    }
    return { products, total };
  }

  //* This function get single product
  async findOneProduct(id: string): Promise<IProducts> {
    const productData = await this.productModel.findById(id).exec();
    if (!productData) {
      throw new NotFoundException('Product not found');
    }
    return productData;
  }

  //* This function for update product
  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<IProducts> {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  //* This function delete product
  async removeProduct(id: string): Promise<IProducts> {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
