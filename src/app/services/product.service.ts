import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Product } from '../product/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  productsPath = 'http://localhost:3000/products';

  getProducts(categoryId: any): Observable<Product[]> {
    let mewPath = this.productsPath;
    if (categoryId) {
      mewPath += '?categoryId=' + categoryId;
    }

    return this.http
      .get<Product[]>(mewPath)
      .pipe(
        tap((data) => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }

    return this.http.post<Product>(this.productsPath, product, httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = 'Bir hata oluştı ' + err.error.message;
    } else {
      errMsg = 'Sistemsel bir hata';
    }

    return throwError(errMsg);
  }
}
