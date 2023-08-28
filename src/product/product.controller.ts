import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get('/')
    async getsProducts(@Res() res): Promise<Product[]>{
        
        const products = await this.productService.getProducts()
        res.status(HttpStatus.OK).json({
            products
        })
        return products
    }

    @Get('/:productParam') //http://localhost:3000/product/productParam?productID=
    async getProductsByParam(@Res() res, @Query('productParam') productParam):Promise<Product> {
        const product = await this.productService.getProductsByParam(productParam)
        if(!product) throw new NotFoundException('Products doesn`t exist')
        return res.status(HttpStatus.OK).json(
            product
        )
    }
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID: string):Promise<Product> {
        const product = await this.productService.getProduct(productID)
        if(!product) throw new NotFoundException('Product doesn`t exist')
        return res.status(HttpStatus.OK).json(
            product
        )
    }

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO):Promise<Product>{ // createProductDTO es una Class de DTO
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            product
        })
    }

    //Otra forma de Eliminar
/*     @Delete('/:productID') //http://localhost:3000/product/64db12c83c206ec7a1b525bb
    async deleteProduct(@Res() res, @Param('productID') productID){
        const productDeleted = await this.productService.deleteProduct(productID)
        if(!productDeleted) throw new NotFoundException('Product doesn`t exist')
        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted',
            productDeleted})
    } */

    @Delete('/delete') //http://localhost:3000/product/delete?productID=64db12c83c206ec7a1b525bb
    async delProduct(@Res() res, @Query('productID') productID):Promise<Product>{
        const productDeleted = await this.productService.deleteProduct(productID)
        if(!productDeleted) throw new NotFoundException('Product doesn`t exist')
        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted',
            productDeleted})
    }

/*     //Otra forma de Actualizar
    @Put('/:productID') //http://localhost:3000/product/64db12c83c206ec7a1b525bb
    async updateProduct (@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('productID') productID){
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Update successfully',
            updatedProduct
        })
    } */

    @Put('/update') // http://localhost:3000/product/update?productID=64db12c83c206ec7a1b525bb
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID){
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO)
        if(!updatedProduct) throw new NotFoundException(`Product doesn't exist`)
        return res.status(HttpStatus.OK).json({
            updatedProduct,
            message: 'Product has been update successfully'
        })
        
    }
} 