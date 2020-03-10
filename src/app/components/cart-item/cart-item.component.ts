import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../shared/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() deleteHandler = new EventEmitter<string>();
  @Output() countChange = new EventEmitter<CartItem>();
  @Output() favoriteHandler = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {}

  onRemove(): void {
    this.deleteHandler.emit(this.item.id);
  }

  onCountChange(num: number) {
    let count = this.item.count + num;
    count = count < 1 ? 1 : count;
    const total = count * this.item.product.price;
    const newCartItem = {
      ...this.item,
      count,
      total,
    };
    this.countChange.emit(newCartItem);
  }

  addToFavorite() {
    this.favoriteHandler.emit(this.item);
  }
}
