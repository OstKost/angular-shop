import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, catchError } from 'rxjs/operators';

import { AppState } from '../state/app.state';
import {
  GetWishlistSubmit,
  GetWishlistSuccess,
  GetWishlistFailure,
  EWishlistActions,
  AddWishItemSubmit,
  RemoveWishItemSubmit,
  AddWishItemSuccess,
  RemoveWishItemSuccess,
  RemoveWishItemFailure,
  AddWishItemFailure
} from '../actions/wishlist.actions';
import { WishlistService } from '../../shared/services/wishlist.service';
import { selectWishlistList } from '../selectors/wishlist.selector';

@Injectable()
export class WishlistEffects {
  @Effect()
  getWishlist$ = this.actions$.pipe(
    ofType<GetWishlistSubmit>(EWishlistActions.GetWishlistSubmit),
    withLatestFrom(this.store.pipe(select(selectWishlistList))),
    switchMap(() => this.wishlistService.getAll()),
    switchMap((response: any) => of(new GetWishlistSuccess(response))),
    catchError(switchMap((error: Error) => of(new GetWishlistFailure(error))))
  );

  @Effect()
  addItem$ = this.actions$.pipe(
    ofType<AddWishItemSubmit>(EWishlistActions.AddWishItemSubmit),
    switchMap(action => this.wishlistService.add(action.payload)),
    switchMap((response: any) => of(new AddWishItemSuccess(response))),
    catchError(switchMap((error: Error) => of(new AddWishItemFailure(error))))
  );

  @Effect()
  removeItem$ = this.actions$.pipe(
    ofType<RemoveWishItemSubmit>(EWishlistActions.RemoveWishItemSubmit),
    switchMap(action => this.wishlistService.remove(action.payload)),
    switchMap((response: any) => of(new RemoveWishItemSuccess(response))),
    catchError(
      switchMap((error: Error) => of(new RemoveWishItemFailure(error)))
    )
  );

  constructor(
    private wishlistService: WishlistService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
