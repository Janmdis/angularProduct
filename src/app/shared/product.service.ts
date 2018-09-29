import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 给product赋值变量
  private products: Product[] = [
    new Product(1, '第一个商品', 18.5, 2.5, '这个是一个高级商品', ['好东西', '高科技']),
    new Product(2, '第二个商品', 28.5, 1.5, '这个是一个牛逼商品', ['好东西', '高科技']),
    new Product(3, '第三个商品', 38.5, 3, '这个是一个厉害商品', ['好东西', '高科技']),
    new Product(4, '第四个商品', 58.5, 4, '这个是一个高档商品', ['好东西', '高科技']),
    new Product(5, '第五个商品', 48.5, 4.5, '这个是一个很赞商品', ['好东西', '高科技'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1 , '2018-7-18' , '张三', 3, '我是大好人'),
    new Comment(2, 1, '2018-6-18' , '李四', 5, '东西很好'),
    new Comment(3, 1, '2018-9-18' , '王五', 4, '66666'),
    new Comment(4, 2, '2018-1-18' , '赵六', 1, '很棒')
  ];

  constructor() {}
  // 返回当前当前的product的数据
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    // tslint:disable-next-line:triple-equals
    return this.products.find( (product) => product.id == id );
  }
  getCommentsForProductId(id: number): Comment[] {
    // tslint:disable-next-line:triple-equals
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}
// 定义一个商品类
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
