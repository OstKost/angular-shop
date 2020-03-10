import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/interfaces';

@Component({
  selector: 'app-wishlist-info-view',
  templateUrl: './wishlist-info.component.html',
  styleUrls: ['./wishlist-info.component.scss'],
})
export class WishlistInfoComponent implements OnInit {
  @Input() count = 0;
  @Input() hideList = true;
  @Input() wishes: WishItem[] = [];
  @Output() toggleList = new EventEmitter<any>();
  @Output() goToWishes = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toggleListHandler(): void {
    this.toggleList.emit();
  }

  handleGoToWishes(): void {
    this.goToWishes.emit();
  }
}
