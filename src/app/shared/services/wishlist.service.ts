import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {CartItem, Product, WishItem} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) {
  }

  handlerError(error) {
    console.error(error);
    return throwError(error);
  }

  getAll(): Observable<any> {
    return this.http.get(`/api/wishlist/`)
      .pipe(
        catchError(this.handlerError)
      );
  }

  add(item: CartItem | Product): Observable<any> {
    const newWishItem: WishItem = {
      ...('product' in item ? item.product : item),
      addDate: new Date()
    };
    return this.http.post(`/api/wishlist/`, newWishItem)
      .pipe(
        catchError(this.handlerError)
      );
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`/api/wishlist/${id}`)
      .pipe(
        map(() => id),
        catchError(this.handlerError)
      );
  }
}
