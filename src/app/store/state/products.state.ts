import { Product } from '../../shared/interfaces';

export interface ProductsState {
  products: Product[];
  error: string | undefined;
}

export const initialProductsState: ProductsState = {
  products: [],
  error: undefined,
};
