import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  public getAllProducts() {
    return this.products;
  }

  public addProduct(product) {
    return this.products.push(product);
  }

  public getProducteById(id: string) {
    return this.products.find(elem => elem.id === id);
  }
}
