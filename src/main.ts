import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners, importProvidersFrom, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './app/store/app.store';
import { saladReducer } from './app/salad/store/salad.store';
import { loadToppings } from './app/salad/store/salad.effects';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter([...appRoutes]),
    provideStore({
      router: routerReducer,
      app: appReducer,
      salad: saladReducer
    }),
    provideEffects({ loadToppings }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
}).catch((err) => console.error(err));
