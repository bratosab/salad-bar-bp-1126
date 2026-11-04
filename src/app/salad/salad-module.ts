import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad';
import { Toppings } from './toppings/toppings';

@NgModule({
  imports: [CommonModule, SaladRoutingModule, Salad, Toppings],
})
export class SaladModule {}
