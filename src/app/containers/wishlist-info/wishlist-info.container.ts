import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { map } from 'rxjs/operators';
import {
  selectLatestWishes,
  selectWishlistList
} from '../../store/selectors/wishlist.selector';
import { GetWishlistSubmit } from '../../store/actions/wishlist.actions';
import { WishItem } from '../../shared/interfaces';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist-info',
  templateUrl: './wishlist-info.container.html'
})
export class WishlistInfoComponent implements OnInit, OnDestroy {
  wishlist$ = this.store.pipe(
    select(selectWishlistList),
    map(wishes => {
      this.count = wishes.length;
    })
  );
  wishlistLatest$ = this.store.pipe(
    select(selectLatestWishes),
    map(wishes => {
      this.latestWishes = wishes;
    })
  );
  count = 0;
  latestWishes: WishItem[] = [];
  hideList = true;
  rSub: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetWishlistSubmit());
    this.rSub = this.router.events.subscribe(val => {
      this.hideList = true;
    });
  }

  ngOnDestroy(): void {
    this.rSub.unsubscribe();
  }

  toggleList(): void {
    this.hideList = !this.hideList;
  }

  goToWishes(): void {
    this.router.navigate(['/wishlist']);
  }
}
