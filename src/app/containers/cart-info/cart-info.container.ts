import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectCartList} from '../../store/selectors/cart.selector';
import {AppState} from '../../store/state/app.state';
import {GetCartSubmit} from '../../store/actions/cart.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.container.html',
})
export class CartInfoComponent implements OnInit {

  cart$ = this.store.pipe(select(selectCartList), map(cart => {
    this.count = cart.reduce((acc, item) => acc + item.count, 0);
    this.total = cart.reduce((acc, item) => acc + (item.count * item.product.price), 0);
  }));
  count = 0;
  total = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCartSubmit());
  }
}
