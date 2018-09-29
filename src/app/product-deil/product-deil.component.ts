import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import{ActivatedRoute, Params} from  '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
@Component({
  selector: 'app-product-deil',
  templateUrl: './product-deil.component.html',
  styleUrls: ['./product-deil.component.css']
})
export class ProductDeilComponent implements OnInit {

  product: Product;
  comments: Comment[];
  constructor( private routeInfo: ActivatedRoute,
                private productService: ProductService
    ) { }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    console.log(this.productService.getProduct(productId));
    console.log(this.productService.getCommentsForProductId(productId));
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

}
