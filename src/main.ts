import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter([...appRoutes])
  ],
}).catch((err) => console.error(err));
