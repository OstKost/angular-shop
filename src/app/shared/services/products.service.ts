import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product, WishItem } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  handlerError(error) {
    console.error(error);
    return throwError(error);
  }

  getAll(): Observable<any> {
    return this.http.get('/api/products/').pipe(catchError(this.handlerError));
  }

  likeProduct(item: Product | WishItem, isLiked: boolean): Observable<any> {
    const newProduct = {
      ...item,
      isLiked,
    };
    return this.http.put(`/api/products/${item.id}`, newProduct).pipe(
      map(() => newProduct),
      catchError(this.handlerError)
    );
  }
}
