import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToppingsService } from '../../services/toppings';
import { GetToppings, SaveToppings } from './salad.actions';
import { exhaustMap, map } from 'rxjs';

export const loadToppings = createEffect(
  (actions$ = inject(Actions), toppingsService = inject(ToppingsService)) => {
    return actions$.pipe(
      ofType(GetToppings),
      exhaustMap(() =>
        toppingsService.getToppings().pipe(map((toppings) => SaveToppings({ list: toppings }))),
      ),
    );
  },
  { functional: true },
);
