import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from "./schemas/product.schema";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}])],
  controllers: [ProductController, ],
  providers: [ProductService]
})
export class ProductModule {}
