import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 创建私有变量
  private products: Product[];
  private urlImg = 'http://placehold.it/320x150';
  constructor(private productService: ProductService) { }
  // 再生命周期里面初始化数据
  ngOnInit() {
      this.products = this.productService.getProducts();
  }
}

