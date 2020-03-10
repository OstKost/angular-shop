import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product, CartItem, WishItem } from '../interfaces';
import { PRODUCTS } from '../products';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = PRODUCTS;
    const wishlist: WishItem[] = [];
    const cart: CartItem[] = [];

    return { products, wishlist, cart };
  }
}
