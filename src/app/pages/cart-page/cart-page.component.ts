import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCartList } from '../../store/selectors/cart.selector';
import { AppState } from '../../store/state/app.state';
import {
  ChangeCartItemSubmit,
  GetCartSubmit,
  RemoveCartItemSubmit,
} from '../../store/actions/cart.actions';
import { CartItem } from '../../shared/interfaces';
import { AddWishItemSubmit } from '../../store/actions/wishlist.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart$ = this.store.pipe(
    select(selectCartList),
    map(items => {
      this.cart = items;
      return items;
    })
  );
  cart: CartItem[] = [];
  result = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCartSubmit());
  }

  removeItem(id: string): void {
    this.store.dispatch(new RemoveCartItemSubmit(id));
  }

  countChange(item: CartItem): void {
    this.store.dispatch(new ChangeCartItemSubmit(item));
  }

  addWishHandler(item: CartItem): void {
    this.store.dispatch(new AddWishItemSubmit(item));
    this.store.dispatch(new RemoveCartItemSubmit(item.id));
  }

  submitHandler(values): void {
    this.result = JSON.stringify(
      {
        ...values,
        items: this.cart.map(({ id, count, total, product }) => ({
          id,
          count,
          total,
          price: product.price,
        })),
      },
      null,
      2
    );
  }
}
