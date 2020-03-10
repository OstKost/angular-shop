import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CartItem } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  handlerError(error) {
    console.error(error);
    return throwError(error);
  }

  getAll(): Observable<any> {
    return this.http.get('/api/cart/').pipe(catchError(this.handlerError));
  }

  addItem(item: CartItem): Observable<any> {
    const newCartItem = {
      id: item.product.id,
      ...item,
    };
    return this.http.put('/api/cart/', newCartItem).pipe(
      map(() => newCartItem),
      catchError(this.handlerError)
    );
  }

  removeItem(id: string): Observable<any> {
    return this.http.delete(`/api/cart/${id}`).pipe(
      map(() => id),
      catchError(this.handlerError)
    );
  }

  changeItem(item: CartItem): Observable<any> {
    return this.http.put(`/api/cart/${item.id}`, item).pipe(
      map(() => item),
      catchError(this.handlerError)
    );
  }
}
