import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'fai-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  products: ProductModel[] = []

  getProducts(){
    this.productService.getProducts().subscribe(
      (products: ProductModel[]) => {
        this.products = products
      })
  }

}
