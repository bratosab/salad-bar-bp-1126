import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { frenchMobileValidator } from '../validators/french-mobile';
import { Router } from '@angular/router';
import { OrderService } from '../services/order';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  selector: 'app-order',
  styleUrl: './order.scss',
  templateUrl: './order.html',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatButton],
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private orderService = inject(OrderService);
  private store = inject(Store);

  orderForm = this.formBuilder.nonNullable.group({
    name: ['Mike', Validators.required],
    tel: ['0612345678', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  onSubmit() {
    if (this.orderForm.valid) {
      // this.orderService.name.set(this.orderForm.controls.name.value);
      // this.orderService.tel.set(this.orderForm.controls.tel.value);

      this.store.dispatch(SetName({ name: this.orderForm.controls.name.value }))
      this.store.dispatch(SetTel({ tel: this.orderForm.controls.tel.value }))

      this.router.navigate(['salad']);
    }
  }
}
