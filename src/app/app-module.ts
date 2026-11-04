import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SaladModule } from './salad/salad-module';
import { SharedMaterialModule } from './shared-material-module';
import { Order } from './order/order';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, Order],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaladModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
