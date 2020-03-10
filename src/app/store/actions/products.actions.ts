import { Action } from '@ngrx/store';
import { Product, WishItem } from '../../shared/interfaces';

export enum EProductsActions {
  GetProductsSubmit = '[Products] Get Products Submit',
  GetProductsSuccess = '[Products] Get Products Success',
  GetProductsFailure = '[Products] Get Products Failure',
  LikeProductSubmit = '[Products] Like Product Submit',
  LikeProductSuccess = '[Products] Like Product Success',
  LikeProductFailure = '[Products] Like Product Failure'
}

export class GetProductsSubmit implements Action {
  public readonly type = EProductsActions.GetProductsSubmit;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductsActions.GetProductsSuccess;

  constructor(public payload: Product[]) {}
}

export class GetProductsFailure implements Action {
  public readonly type = EProductsActions.GetProductsFailure;

  constructor(public payload: Error) {}
}

export class LikeProductSubmit implements Action {
  public readonly type = EProductsActions.LikeProductSubmit;

  constructor(public payload: { item: Product | WishItem; isLiked: boolean }) {}
}

export class LikeProductSuccess implements Action {
  public readonly type = EProductsActions.LikeProductSuccess;

  constructor(public payload: Product) {}
}

export class LikeProductFailure implements Action {
  public readonly type = EProductsActions.LikeProductFailure;

  constructor(public payload: Error) {}
}

export type ProductsActions =
  | GetProductsSubmit
  | GetProductsSuccess
  | GetProductsFailure
  | LikeProductSubmit
  | LikeProductSuccess
  | LikeProductFailure;
