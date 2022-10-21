import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ProductService} from "../product/product.service";
import {Product} from "../product/product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @ts-ignore
  product: Product;
  id: any;


  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private _product:ProductService){
  }
  sub: any;
  ngOnInit() {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      let products = this._product.getProducts();
      // @ts-ignore
      this.product = products.find(p => p.productID == this.id);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }

}
