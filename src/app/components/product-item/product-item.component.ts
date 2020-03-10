import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleLike = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }

  cartHandler(): void {
    this.addToCart.emit(this.product);
  }

  likeHandler(): void {
    this.toggleLike.emit(this.product);
  }
}
