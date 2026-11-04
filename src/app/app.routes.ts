import { Routes } from '@angular/router';
import { Order } from './order/order';
import { Salad } from './salad/salad';
import { orderGuard } from './guards/order-guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: Order
  },
  { path: 'salad', component: Salad, canActivate: [orderGuard] },
  {
    path: 'kitchen',
    loadComponent: () => import('./kitchen/kitchen').then((c) => c.Kitchen),
  },
];