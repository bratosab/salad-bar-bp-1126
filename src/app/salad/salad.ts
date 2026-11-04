import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order';
import { ToppingsService } from '../services/toppings';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-salad',
  standalone: false,
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
})
export class Salad implements OnInit {
    protected orderService = inject(OrderService);
    private toppingsService = inject(ToppingsService);
 
    public toppings: Topping[] = []

    ngOnInit() {
      this.toppingsService.getToppings().subscribe(toppings => {
      console.table(toppings)
        this.toppings = toppings
      })

      console.log('after subscribe')
    }
}
