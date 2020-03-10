import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, catchError, map } from 'rxjs/operators';

import { AppState } from '../state/app.state';
import {
  GetCartSubmit,
  GetCartSuccess,
  GetCartFailure,
  ECartActions,
  AddCartItemSubmit,
  AddCartItemSuccess,
  AddCartItemFailure,
  RemoveCartItemSubmit,
  RemoveCartItemSuccess,
  ChangeCartItemSuccess,
  ChangeCartItemFailure,
  RemoveCartItemFailure,
  ChangeCartItemSubmit
} from '../actions/cart.actions';
import { CartService } from '../../shared/services/cart.service';
import { selectCartList } from '../selectors/cart.selector';

@Injectable()
export class CartEffects {
  @Effect()
  getCart$ = this.actions$.pipe(
    ofType<GetCartSubmit>(ECartActions.GetCartSubmit),
    withLatestFrom(this.store.pipe(select(selectCartList))),
    switchMap(() => this.cartService.getAll()),
    switchMap((response: any) => of(new GetCartSuccess(response))),
    catchError(switchMap((error: Error) => of(new GetCartFailure(error))))
  );

  @Effect()
  addItem$ = this.actions$.pipe(
    ofType<AddCartItemSubmit>(ECartActions.AddCartItemSubmit),
    switchMap(action => this.cartService.addItem(action.payload)),
    switchMap((response: any) => of(new AddCartItemSuccess(response))),
    catchError(switchMap((error: Error) => of(new AddCartItemFailure(error))))
  );

  @Effect()
  removeItem$ = this.actions$.pipe(
    ofType<RemoveCartItemSubmit>(ECartActions.RemoveCartItemSubmit),
    switchMap(action => this.cartService.removeItem(action.payload)),
    switchMap((response: any) => of(new RemoveCartItemSuccess(response))),
    catchError(
      switchMap((error: Error) => of(new RemoveCartItemFailure(error)))
    )
  );

  @Effect()
  changeItem$ = this.actions$.pipe(
    ofType<ChangeCartItemSubmit>(ECartActions.ChangeCartItemSubmit),
    switchMap(action => this.cartService.changeItem(action.payload)),
    switchMap((response: any) => of(new ChangeCartItemSuccess(response))),
    catchError(
      switchMap((error: Error) => of(new ChangeCartItemFailure(error)))
    )
  );

  constructor(
    private cartService: CartService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
