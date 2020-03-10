import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WishItem} from '../../shared/interfaces';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent implements OnInit {

  @Input() item: WishItem;
  @Output() deleteHandler = new EventEmitter<WishItem>();
  @Output() addToCartHandler = new EventEmitter<WishItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.deleteHandler.emit(this.item);
  }

  onAddToCart(): void {
    this.addToCartHandler.emit(this.item);
  }
}
