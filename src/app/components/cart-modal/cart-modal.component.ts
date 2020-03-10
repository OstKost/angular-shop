import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartItem, Product } from '../../shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface DialogData {
  product: Product;
  submitHandler: (item: CartItem) => void;
}

@Component({
  selector: 'app-product-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit, OnDestroy {
  form: FormGroup;
  tSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      count: new FormControl(1, [Validators.required, Validators.min(1)]),
      total: new FormControl(this.data.product.price, Validators.required),
    });
    this.tSub = this.form.get('count').valueChanges.subscribe(count => {
      const checkedCount = count < 1 ? 1 : count;
      if (count < 1) {
        this.form.patchValue({ count: checkedCount });
      }
      this.form.patchValue({ total: checkedCount * this.data.product.price });
    });
  }

  ngOnDestroy(): void {
    this.tSub.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    const item: CartItem = {
      product: this.data.product,
      count: this.form.value.count,
      total: this.form.value.total,
    };
    this.data.submitHandler(item);
    this.dialogRef.close();
  }

  onCountChange(num) {
    let newCount = this.form.value.count + num;
    newCount = newCount < 1 ? 1 : newCount;
    this.form.setValue({
      count: newCount,
      total: this.data.product.price * newCount,
    });
  }
}
