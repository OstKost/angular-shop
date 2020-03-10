import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-info-view',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {
  @Input() count = 0;
  @Input() total = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
