import { Component, input } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-toppings',
  styleUrl: './toppings.scss',
  templateUrl: './toppings.html',
  imports: [CurrencyPipe]
})
export class Toppings {
  public toppings = input<Topping[]>([])
}
