import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Salad } from './salad';
import { orderGuard } from '../guards/order-guard';

const routes: Routes = [
  { path: 'salad', component: Salad, canActivate: [orderGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
