import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order';
import { ToppingsService } from '../services/toppings';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
  imports: [CurrencyPipe],
})
export class Salad implements OnInit {
  protected orderService = inject(OrderService);
  private toppingsService = inject(ToppingsService);

  public toppings: Topping[] = [];

  ngOnInit() {
    this.toppingsService.getToppings().subscribe((toppings) => {
      console.table(toppings);
      this.toppings = toppings;
    });

    console.log('after subscribe');
  }
}
