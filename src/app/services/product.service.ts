import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsAPI = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get<any>(this.productsAPI);
}
}
