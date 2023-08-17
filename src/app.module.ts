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
    MongooseModule.forRoot(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}?authSource=admin`)],  
    //MongooseModule.forRoot(`mongodb://mongo:EeC6yDFggM6bndEz6vMg@containers-us-west-185.railway.app:6319`)],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
