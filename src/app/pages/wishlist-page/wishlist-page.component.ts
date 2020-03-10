import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectWishlistList } from '../../store/selectors/wishlist.selector';
import { AppState } from '../../store/state/app.state';
import {
  GetWishlistSubmit,
  RemoveWishItemSubmit,
} from '../../store/actions/wishlist.actions';
import { MatDialog } from '@angular/material/dialog';
import { LikeProductSubmit } from '../../store/actions/products.actions';
import { CartItem, WishItem } from '../../shared/interfaces';
import { AddCartItemSubmit } from '../../store/actions/cart.actions';
import { CartModalComponent } from '../../components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss'],
})
export class WishlistPageComponent implements OnInit {
  wishlist$ = this.store.pipe(select(selectWishlistList));

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(new GetWishlistSubmit());
  }

  addToCart(item: CartItem): void {
    this.store.dispatch(new AddCartItemSubmit(item));
    this.store.dispatch(
      new LikeProductSubmit({ item: item.product, isLiked: false })
    );
    this.store.dispatch(new RemoveWishItemSubmit(item.product.id));
  }

  openDialog(product): void {
    this.dialog.open(CartModalComponent, {
      width: '550px',
      data: { product, submitHandler: this.addToCart.bind(this) },
    });
  }

  deleteWish(item: WishItem): void {
    this.store.dispatch(new RemoveWishItemSubmit(item.id));
    this.store.dispatch(new LikeProductSubmit({ item, isLiked: false }));
  }
}
