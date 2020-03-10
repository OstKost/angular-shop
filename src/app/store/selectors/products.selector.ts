import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ProductsState } from '../state/products.state';

const selectProducts = (state: AppState) => state.products;

export const selectProductsList = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
);

export const selectProductsError = createSelector(
  selectProducts,
  (state: ProductsState) => state.error
);
