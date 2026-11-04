import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { frenchMobileValidator } from '../validators/french-mobile';
import { Router } from '@angular/router';
import { OrderService } from '../services/order';

@Component({
  selector: 'app-order',
  standalone: false,
  styleUrl: './order.scss',
  templateUrl: './order.html',
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private orderService = inject(OrderService);

  orderForm = this.formBuilder.nonNullable.group({
    name: ['Mike', Validators.required],
    tel: ['0612345678', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.name = this.orderForm.controls.name.value 
      this.orderService.tel = this.orderForm.controls.tel.value 

      this.router.navigate(['salad']);
    }
  }
}
