import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../services/order';
import { ToppingsService } from '../services/toppings';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';
import { Toppings } from './toppings/toppings';

@Component({
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
  imports: [CurrencyPipe, Toppings],
})
export class Salad implements OnInit {
  protected orderService = inject(OrderService);
  private toppingsService = inject(ToppingsService);

  public toppings = signal<Topping[]>([])

  ngOnInit() {
    this.toppingsService.getToppings().subscribe((toppings) => {
      console.table(toppings);
      this.toppings.set(toppings);
    });

    console.log('after subscribe');
  }
}
