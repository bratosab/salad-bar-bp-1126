import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad';
import { Toppings } from './toppings/toppings';

@NgModule({
  declarations: [Salad, Toppings],
  imports: [CommonModule, SaladRoutingModule],
})
export class SaladModule {}
