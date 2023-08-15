//Curso Fazt
//import { Schema } from "mongoose";
//import { number } from "yargs";

/* export const productSchema =  new Schema({
    name: {type: String, required: true},
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date, 
        default: Date.now
    }
})
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, HydratedDocument, now } from 'mongoose';
import { type } from 'os';

export type ProductDocument = HydratedDocument<Product>;


@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageURL: string;

  @Prop()
  price: number;

  @Prop({ default: Date.now }) // Crear valor por defecto
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product); 


/* // Escrito por mi desde la documentación de Nestjs Mongodb
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;


@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageURL: string;

  @Prop()
  price: number;

  @Prop()
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product); */