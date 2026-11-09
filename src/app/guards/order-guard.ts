import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order';
import { Store } from '@ngrx/store';

export const orderGuard: CanActivateFn = (route, state) => {
    const store = inject(Store);
    const router = inject(Router);

    const name = store.selectSignal<string>(state => state.app.name)
    const tel = store.selectSignal<string>(state => state.app.tel)

    if(!!name() && !!tel()) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
};
