import { Action } from '@ngrx/store';
import { CartItem, Product, WishItem } from '../../shared/interfaces';

export enum EWishlistActions {
  GetWishlistSubmit = '[Wishlist] Get Wishlist Submit',
  GetWishlistSuccess = '[Wishlist] Get Wishlist Success',
  GetWishlistFailure = '[Wishlist] Get Wishlist Failure',
  AddWishItemSubmit = '[Wishlist] Add Wish Item Submit',
  AddWishItemSuccess = '[Wishlist] Add Wish Item Success',
  AddWishItemFailure = '[Wishlist] Add Wish Item Failure',
  RemoveWishItemSubmit = '[Wishlist] Remove Wish Item Submit',
  RemoveWishItemSuccess = '[Wishlist] Remove Wish Item Success',
  RemoveWishItemFailure = '[Wishlist] Remove Wish Item Failure',
}

export class GetWishlistSubmit implements Action {
  public readonly type = EWishlistActions.GetWishlistSubmit;
}

export class GetWishlistSuccess implements Action {
  public readonly type = EWishlistActions.GetWishlistSuccess;

  constructor(public payload: WishItem[]) {}
}

export class GetWishlistFailure implements Action {
  public readonly type = EWishlistActions.GetWishlistFailure;

  constructor(public payload: Error) {}
}

export class AddWishItemSubmit implements Action {
  public readonly type = EWishlistActions.AddWishItemSubmit;

  constructor(public payload: CartItem | Product) {}
}

export class AddWishItemSuccess implements Action {
  public readonly type = EWishlistActions.AddWishItemSuccess;

  constructor(public payload: WishItem) {}
}

export class AddWishItemFailure implements Action {
  public readonly type = EWishlistActions.AddWishItemFailure;

  constructor(public payload: Error) {}
}

export class RemoveWishItemSubmit implements Action {
  public readonly type = EWishlistActions.RemoveWishItemSubmit;

  constructor(public payload: string) {}
}

export class RemoveWishItemSuccess implements Action {
  public readonly type = EWishlistActions.RemoveWishItemSuccess;

  constructor(public payload: string) {}
}

export class RemoveWishItemFailure implements Action {
  public readonly type = EWishlistActions.RemoveWishItemFailure;

  constructor(public payload: Error) {}
}

export type WishlistActions =
  | GetWishlistSubmit
  | GetWishlistSuccess
  | GetWishlistFailure
  | AddWishItemSubmit
  | AddWishItemSuccess
  | AddWishItemFailure
  | RemoveWishItemSubmit
  | RemoveWishItemSuccess
  | RemoveWishItemFailure;
