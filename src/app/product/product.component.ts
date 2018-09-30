import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 创建私有变量
  private products: Product[];
  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  private urlImg = 'http://placehold.it/320x150';
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
    // .debounceTime(500)
    .subscribe(
      value => this.keyword = value
    )
    ;
   }
  // 再生命周期里面初始化数据
  ngOnInit() {
      this.products = this.productService.getProducts();
  }
}

