import { initialProductsState, ProductsState } from '../state/products.state';
import { EProductsActions, ProductsActions } from '../actions/products.actions';

export const productsReducer = (
  state = initialProductsState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case EProductsActions.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case EProductsActions.GetProductsFailure: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    case EProductsActions.LikeProductSuccess: {
      const products = [...state.products];
      const product = products.find(item => item.id === action.payload.id);
      product.isLiked = action.payload.isLiked;
      return {
        ...state,
        products,
      };
    }

    case EProductsActions.LikeProductFailure: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
};
