import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, catchError, map } from 'rxjs/operators';

import { AppState } from '../state/app.state';
import {
  GetProductsSubmit,
  GetProductsSuccess,
  GetProductsFailure,
  EProductsActions,
  LikeProductSubmit,
  LikeProductSuccess,
  LikeProductFailure
} from '../actions/products.actions';
import { ProductsService } from '../../shared/services/products.service';
import { selectProductsList } from '../selectors/products.selector';

@Injectable()
export class ProductsEffects {
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProductsSubmit>(EProductsActions.GetProductsSubmit),
    withLatestFrom(this.store.pipe(select(selectProductsList))),
    switchMap(() => this.productsService.getAll()),
    switchMap((response: any) => of(new GetProductsSuccess(response))),
    catchError(switchMap((error: Error) => of(new GetProductsFailure(error))))
  );

  @Effect()
  likeProduct$ = this.actions$.pipe(
    ofType<LikeProductSubmit>(EProductsActions.LikeProductSubmit),
    switchMap(action =>
      this.productsService.likeProduct(
        action.payload.item,
        action.payload.isLiked
      )
    ),
    switchMap((response: any) => of(new LikeProductSuccess(response))),
    catchError(switchMap((error: Error) => of(new GetProductsFailure(error))))
  );

  constructor(
    private productsService: ProductsService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
