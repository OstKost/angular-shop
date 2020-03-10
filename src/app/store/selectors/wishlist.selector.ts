import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { WishlistState } from '../state/wishlist.state';

const selectWishlist = (state: AppState) => state.wishlist;

export const selectWishlistList = createSelector(
  selectWishlist,
  (state: WishlistState) => state.wishlist
);

export const selectLatestWishes = createSelector(
  selectWishlist,
  (state: WishlistState) =>
    state.wishlist.sort((a, b) => (a.addDate > b.addDate ? -1 : 1)).slice(0, 5)
);

export const selectWishlistError = createSelector(
  selectWishlist,
  (state: WishlistState) => state.error
);
