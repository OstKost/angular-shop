import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent implements OnInit {
  form: FormGroup;
  @Output() submitHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('')]),
      email: new FormControl('', Validators.email),
      address: new FormControl(''),
      comment: new FormControl(''),
    });
  }

  onSubmit() {
    this.submitHandler.emit(this.form.value);
  }
}
