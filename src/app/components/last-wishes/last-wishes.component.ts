import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../../shared/interfaces';

@Component({
  selector: 'app-last-wishes',
  templateUrl: './last-wishes.component.html',
  styleUrls: ['./last-wishes.component.scss'],
})
export class LastWishesComponent implements OnInit {
  @Input() wishes: WishItem[] = [];
  @Input() hide = true;
  @Output() goToWishes = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleGoToWishes(): void {
    this.goToWishes.emit();
  }
}
