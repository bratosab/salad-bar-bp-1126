import { Component, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toppings',
  styleUrl: './toppings.scss',
  templateUrl: './toppings.html',
  imports: [CurrencyPipe, MatButton]
})
export class Toppings {
  public toppings = input<Topping[]>([])
  public clickTopping = output<Topping>()
  public buttonLabel = input<string>('')
  public listTitle = input<string>('')
}
