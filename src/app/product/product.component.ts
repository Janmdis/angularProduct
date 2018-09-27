import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product:Array<Product>

  constructor() { }

  ngOnInit() {
    this.product = [
      new Product(1,"第一个商品",18.5,2.5,"这个是一个高级商品",["好东西","高科技"]),
      new Product(2,"第二个商品",28.5,1.5,"这个是一个牛逼商品",["好东西","高科技"]),
      new Product(3,"第三个商品",38.5,3,"这个是一个厉害商品",["好东西","高科技"]),
      new Product(4,"第四个商品",58.5,4,"这个是一个高档商品",["好东西","高科技"]),
      new Product(5,"第五个商品",48.5,4.5,"这个是一个很赞商品",["好东西","高科技"])
    ]
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}