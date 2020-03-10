import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { CartState } from '../state/cart.state';

const selectCart = (state: AppState) => state.cart;

export const selectCartList = createSelector(
  selectCart,
  (state: CartState) => state.cart
);

export const selectCartError = createSelector(
  selectCart,
  (state: CartState) => state.error
);
