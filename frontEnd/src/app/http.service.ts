import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  }

  getAllProducts() {
    return this._http.get("/api/products");
  }

  getOneProduct(id) {
    return this._http.get(`/api/products/${id}`);
  }

  createProduct(newProduct) {
    return this._http.post("/api/products/create", newProduct);
  }

  updateProduct(updatedProduct) {
    console.log("got to httpservice");
    return this._http.put(`/api/products/${updatedProduct._id}`, updatedProduct);
  }

  deleteProduct(id: string) {
    return this._http.delete(`/api/products/${id}/delete`, {});
  }
  
}
