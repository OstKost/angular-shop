import { RouterReducerState } from '@ngrx/router-store';

import { ProductsState, initialProductsState } from './products.state';
import { CartState, initialCartState } from './cart.state';
import { initialWishlistState, WishlistState } from './wishlist.state';

export interface AppState {
  router?: RouterReducerState;
  products: ProductsState;
  cart: CartState;
  wishlist: WishlistState;
}

export const initialAppState: AppState = {
  products: initialProductsState,
  cart: initialCartState,
  wishlist: initialWishlistState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
