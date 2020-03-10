import { CartItem } from '../../shared/interfaces';

export interface CartState {
  cart: CartItem[];
  error: string | undefined;
}

export const initialCartState: CartState = {
  cart: [],
  error: undefined
};
