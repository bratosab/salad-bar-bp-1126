import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { frenchMobileValidator } from '../validators/french-mobile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  styleUrl: './order.scss',
  templateUrl: './order.html',
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  orderForm = this.formBuilder.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  onSubmit() {
    if (this.orderForm.valid) {
      this.router.navigate(['salad']);
    }
  }
}
