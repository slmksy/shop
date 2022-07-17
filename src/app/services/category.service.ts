import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { Category } from '../category/category';


@Injectable(
 
)
export class CategoryService {

  constructor(private http:HttpClient) {  }
  categoryPath = "http://localhost:3000/categories"

  getCategories():Observable<Category[]>{
      return this.http.get<Category[]>(this.categoryPath).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    handleError(err:HttpErrorResponse){
      let errMsg =""
      if(err.error instanceof ErrorEvent){
        errMsg = "Bir hata oluştı " + err.error.message
      }
      else{
        errMsg = "Sistemsel bir hata"
      }

      return throwError(errMsg)
    }
    
  
}

