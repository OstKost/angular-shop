export interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  isLiked: boolean;
}

export interface CartItem {
  id?: string;
  product: Product;
  count: number;
  total: number;
}

export interface WishItem {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  addDate: Date;
}
