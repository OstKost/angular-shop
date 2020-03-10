import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartItem, Product } from '../../shared/interfaces';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectProductsList } from '../../store/selectors/products.selector';
import {
  GetProductsSubmit,
  LikeProductSubmit,
} from '../../store/actions/products.actions';
import {
  AddWishItemSubmit,
  RemoveWishItemSubmit,
} from '../../store/actions/wishlist.actions';
import { AddCartItemSubmit } from '../../store/actions/cart.actions';
import { CartModalComponent } from '../../components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$ = this.store.pipe(select(selectProductsList));

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(new GetProductsSubmit());
  }

  addToCart(item: CartItem): void {
    this.store.dispatch(new AddCartItemSubmit(item));
  }

  openDialog(product): void {
    this.dialog.open(CartModalComponent, {
      width: '550px',
      data: { product, submitHandler: this.addToCart.bind(this) },
    });
  }

  likeProduct(product: Product): void {
    if (product.isLiked) {
      this.store.dispatch(new RemoveWishItemSubmit(product.id));
    } else {
      this.store.dispatch(new AddWishItemSubmit(product));
    }
    this.store.dispatch(
      new LikeProductSubmit({ item: product, isLiked: !product.isLiked })
    );
  }
}
