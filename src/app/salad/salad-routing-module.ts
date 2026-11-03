import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Salad } from './salad';

const routes: Routes = [
  { path: 'salad', component: Salad }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
