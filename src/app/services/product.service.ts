import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { app_api } from '../app.api';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){
  }

  getProducts(): Observable<ProductModel[]>{
    let endpoint: string = `${app_api}/products`

    return this.http.get<ProductModel[]>(endpoint)
  }

}
