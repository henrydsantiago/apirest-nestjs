import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,  
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`)],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
