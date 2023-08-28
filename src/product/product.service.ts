/* import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { createProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService{

    constructor(@InjectModel('Product') private productModel: Model<Product>){}

}
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDTO } from './dto/product.dto';
import { Product as iProduct } from "./interfaces/product.interface";


@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<iProduct>) {}

  async getProducts(): Promise<iProduct[]>{
    const products = await this.productModel.find()
    return products
  }

  async getProductsByParam(parametro:any): Promise<iProduct[]>{
    console.log("Servidor/PARAMETRO: ", parametro);
    const products = await this.productModel.find({name:parametro})
    return products
  }

  async getProduct(productID: string): Promise<iProduct>{
    const product = await this.productModel.findById(productID)
    return product
  }


  async createProduct(createProductDTO: CreateProductDTO):Promise<iProduct>{
    const product = new this.productModel(createProductDTO)
    return await product.save()
  }

  async deleteProduct(productID:string):Promise<iProduct>{
    const deletedProduct = await this.productModel.findByIdAndDelete(productID)
    return deletedProduct
  }

  async updateProduct(productID:string, createProductDTO: CreateProductDTO): Promise<iProduct>{
    const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true}) //Esto new: true, es para que devuelva el objeto nuevo
    return updatedProduct
  }


  
  
  
  
/*   async create(productDTO: createProductDTO): Promise<iProduct> {
    const createdCat = new this.productModel(productDTO);
    return createdCat.save();
  }

  async findAll(): Promise<iProduct[]> {
    return this.productModel.find().exec();
  } */

}




// Documentación de Nestjs
/* import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { createProductDTO } from './dto/product.dto';


@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(productDTO: createProductDTO): Promise<Product> {
    const createdCat = new this.productModel(productDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
 */