import { initialWishlistState, WishlistState } from '../state/wishlist.state';
import { EWishlistActions, WishlistActions } from '../actions/wishlist.actions';

export const wishlistReducer = (
  state = initialWishlistState,
  action: WishlistActions
): WishlistState => {
  switch (action.type) {
    case EWishlistActions.GetWishlistSuccess: {
      return {
        ...state,
        wishlist: action.payload.sort((a, b) =>
          a.addDate > b.addDate ? -1 : 1
        ),
      };
    }

    case EWishlistActions.GetWishlistFailure: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    case EWishlistActions.AddWishItemSuccess: {
      return {
        ...state,
        wishlist: [action.payload, ...state.wishlist],
      };
    }

    case EWishlistActions.AddWishItemFailure: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    case EWishlistActions.RemoveWishItemSuccess: {
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    }

    case EWishlistActions.RemoveWishItemFailure: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
};
