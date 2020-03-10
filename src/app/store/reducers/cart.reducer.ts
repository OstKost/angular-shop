import { CartState, initialCartState } from '../state/cart.state';
import { CartActions, ECartActions } from '../actions/cart.actions';

export const cartReducer = (
  state = initialCartState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ECartActions.GetCartSuccess: {
      return {
        ...state,
        cart: action.payload
      };
    }

    case ECartActions.GetCartFailure: {
      return {
        ...state,
        error: action.payload.message
      };
    }

    case ECartActions.AddCartItemSuccess: {
      const newCart = state.cart.filter(
        item => item.product.id !== action.payload.product.id
      );
      return {
        ...state,
        cart: [...newCart, action.payload]
      };
    }

    case ECartActions.AddCartItemFailure: {
      return {
        ...state,
        error: action.payload.message
      };
    }

    case ECartActions.RemoveCartItemSuccess: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };
    }

    case ECartActions.RemoveCartItemFailure: {
      return {
        ...state,
        error: action.payload.message
      };
    }

    case ECartActions.ChangeCartItemSuccess: {
      const newCart = [...state.cart];
      const cartItem = newCart.find(item => item.id === action.payload.id);
      cartItem.count = action.payload.count;
      cartItem.total = action.payload.total;
      return {
        ...state,
        cart: newCart
      };
    }

    case ECartActions.ChangeCartItemFailure: {
      return {
        ...state,
        error: action.payload.message
      };
    }

    default:
      return state;
  }
};
