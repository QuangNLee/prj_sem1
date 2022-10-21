import { Injectable } from '@angular/core';
import {Product} from "./product.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts() {
    //List of Product
    let products: Product[];
    products = [
      {
        productID: 1,
        name: 'Belts uniform ',
        image: '../../assets/img/uniform/belts/Belts uniform 4.95$ id 1.jpg',
        description: 'Our firm offers a varied range of School Uniform Belts. Professionals develop this product as per worldwide industry standards. We offer this product at nominal costs.',
        category: 'Belts',
        price: 4.95,
      },
     

    ]
    return products;
  };
  public getProduct(id: number) {
    let products:Product[]=this.getProducts();
    console.log(products);
    console.log(products.find(p => p.productID==id));

    return products.find(p => p.productID==id);
  }
  constructor() { }
}