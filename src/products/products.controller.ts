import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './services/products.service';

@Controller('products')
export class ProductsController {

  constructor( private productService: ProductsService ) {}

  @Get()
  // @Redirect('https://google.com')
  public getAll() {
    return this.productService.getAllProducts();
  }

  @Get(`:id`)
  public getOne(@Param('id') id: string){
    return this.productService.getProducteById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createProduct: CreateProductDto){
    return this.productService.addProduct(createProduct);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): string {
    return `Продукт с id: ${id}, удален!`
  }

  @Put(':id')
  public updateAll(@Body() updateProducte: UpdateProductDto, @Param('id') id: string) {
    return `Продукт с id : ${id} обнавлен!`
  }

  @Patch()
  public update() {}

}
