import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, RemoveTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  dressing: string;
  chosenToppings: Topping[];
}

export const initialState: SaladState = {
  toppings: [],
  dressing: '',
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, action) => {
    return { ...state, toppings: action.list };
  }),
  on(ChooseTopping, (state, action) => {
    return { ...state, chosenToppings: [...state.chosenToppings, action.choice] };
  }),
  on(RemoveTopping, (state, action) => {
    return {
      ...state,
      chosenToppings: state.chosenToppings.filter((t) => t.id !== action.choice.id),
    };
  }),
);
