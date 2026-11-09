import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { OrderService } from '../services/order';
import { ToppingsService } from '../services/toppings';
import { Topping } from '../models/topping.model';
import { CurrencyPipe } from '@angular/common';
import { Toppings } from './toppings/toppings';
import { Store } from '@ngrx/store';
import { ChooseTopping, GetToppings, RemoveTopping, SaveToppings } from './store/salad.actions';

@Component({
  selector: 'app-salad',
  styleUrl: './salad.scss',
  templateUrl: './salad.html',
  imports: [CurrencyPipe, Toppings],
})
export class Salad implements OnInit {
  protected orderService = inject(OrderService);
  private store = inject(Store);

  public name = this.store.selectSignal<string>((state) => state.app.name);
  public toppings = this.store.selectSignal<Topping[]>((state) => state.salad.toppings);
  public chosenToppings = this.store.selectSignal<Topping[]>((state) => state.salad.chosenToppings);

  public totalPrice: Signal<number> = computed(() => {
    let total = 0;
    this.chosenToppings().forEach((topping) => (total = total + topping.price));

    return total;
  });

  ngOnInit() {
    // this.toppingsService.getToppings().subscribe((toppings) => {
    //   console.table(toppings);
    //   this.store.dispatch(SaveToppings({ list: toppings }))
    // });

    this.store.dispatch(GetToppings());

    console.log('after subscribe');
  }

  chooseTopping(topping: Topping) {
    this.store.dispatch(ChooseTopping({ choice: topping }));
  }

  removeTopping(topping: Topping) {
    this.store.dispatch(RemoveTopping({ choice: topping }));
  }
}
