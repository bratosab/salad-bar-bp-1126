import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, GetToppings, RemoveTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  loadToppings: boolean;
  dressing: string;
  chosenToppings: Topping[];
}

export const initialState: SaladState = {
  toppings: [],
  dressing: '',
  loadToppings: false,
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(GetToppings, (state, action) => {
    return { ...state, loadToppings: true };
  }),
  on(SaveToppings, (state, action) => {
    return { ...state, toppings: action.list, loadToppings: false };
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
