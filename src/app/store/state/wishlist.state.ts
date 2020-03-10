import { WishItem } from '../../shared/interfaces';

export interface WishlistState {
  wishlist: WishItem[];
  error: string | undefined;
}

export const initialWishlistState: WishlistState = {
  wishlist: [],
  error: undefined
};
