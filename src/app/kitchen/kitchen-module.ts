import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing-module';
import { Kitchen } from './kitchen';

@NgModule({
  imports: [CommonModule, KitchenRoutingModule, Kitchen],
})
export class KitchenModule {}
