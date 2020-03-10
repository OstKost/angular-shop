import { Action } from '@ngrx/store';
import { CartItem } from '../../shared/interfaces';

export enum ECartActions {
  GetCartSubmit = '[Cart] Get Cart Submit',
  GetCartSuccess = '[Cart] Get Cart Success',
  GetCartFailure = '[Cart] Get Cart Failure',
  AddCartItemSubmit = '[Cart] Add Cart Item Submit',
  AddCartItemSuccess = '[Cart] Add Cart Item Success',
  AddCartItemFailure = '[Cart] Add Cart Item Failure',
  RemoveCartItemSubmit = '[Cart] Remove Cart Item Submit',
  RemoveCartItemSuccess = '[Cart] Remove Cart Item Success',
  RemoveCartItemFailure = '[Cart] Remove Cart Item Failure',
  ChangeCartItemSubmit = '[Cart] Change Cart Item Submit',
  ChangeCartItemSuccess = '[Cart] Change Cart Item Success',
  ChangeCartItemFailure = '[Cart] Change Cart Item Failure',
}

export class GetCartSubmit implements Action {
  public readonly type = ECartActions.GetCartSubmit;
}

export class GetCartSuccess implements Action {
  public readonly type = ECartActions.GetCartSuccess;

  constructor(public payload: CartItem[]) {}
}

export class GetCartFailure implements Action {
  public readonly type = ECartActions.GetCartFailure;

  constructor(public payload: Error) {}
}

export class AddCartItemSubmit implements Action {
  public readonly type = ECartActions.AddCartItemSubmit;

  constructor(public payload: CartItem) {}
}

export class AddCartItemSuccess implements Action {
  public readonly type = ECartActions.AddCartItemSuccess;

  constructor(public payload: CartItem) {}
}

export class AddCartItemFailure implements Action {
  public readonly type = ECartActions.AddCartItemFailure;

  constructor(public payload: Error) {}
}

export class RemoveCartItemSubmit implements Action {
  public readonly type = ECartActions.RemoveCartItemSubmit;

  constructor(public payload: string) {}
}

export class RemoveCartItemSuccess implements Action {
  public readonly type = ECartActions.RemoveCartItemSuccess;

  constructor(public payload: string) {}
}

export class RemoveCartItemFailure implements Action {
  public readonly type = ECartActions.RemoveCartItemFailure;

  constructor(public payload: Error) {}
}

export class ChangeCartItemSubmit implements Action {
  public readonly type = ECartActions.ChangeCartItemSubmit;

  constructor(public payload: CartItem) {}
}

export class ChangeCartItemSuccess implements Action {
  public readonly type = ECartActions.ChangeCartItemSuccess;

  constructor(public payload: CartItem) {}
}

export class ChangeCartItemFailure implements Action {
  public readonly type = ECartActions.ChangeCartItemFailure;

  constructor(public payload: Error) {}
}

export type CartActions =
  | GetCartSubmit
  | GetCartSuccess
  | GetCartFailure
  | AddCartItemSubmit
  | AddCartItemSuccess
  | AddCartItemFailure
  | RemoveCartItemSubmit
  | RemoveCartItemSuccess
  | RemoveCartItemFailure
  | ChangeCartItemSubmit
  | ChangeCartItemSuccess
  | ChangeCartItemFailure;
