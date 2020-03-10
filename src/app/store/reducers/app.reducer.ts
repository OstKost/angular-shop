import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import { wishlistReducer } from './wishlist.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
};
