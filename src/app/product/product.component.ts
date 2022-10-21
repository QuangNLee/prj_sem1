import { Component, OnInit } from '@angular/core';
import {Product} from "./product.model";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {


  title = '';
  products: Product [] = [];

  constructor(private product : ProductService) { }

  // ngOnInit(): void {
  //   this.viewAllProduct();
  // }
  // viewAllProduct() {
  //   this.products = this.productService.viewAllProducts();
  // }
  ngOnInit() {
    this.product.getProduct(1);
    this.products=this.product.getProducts();
  }



}