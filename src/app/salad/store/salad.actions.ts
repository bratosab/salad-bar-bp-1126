import { createAction, props } from "@ngrx/store";
import { Topping } from "../../models/topping.model";

export enum SaladActionTypes {
  GetToppings = 'salad/get-toppings',
  SaveToppings = 'salad/save-toppings',
  ChooseTopping = 'salad/choose-toppings',
  RemoveTopping = 'salad/remove-toppings',
}

export const GetToppings = createAction(SaladActionTypes.GetToppings);
export const SaveToppings = createAction(
  SaladActionTypes.SaveToppings,
  props<{ list: Topping[] }>()
);
export const ChooseTopping = createAction(
  SaladActionTypes.ChooseTopping,
  props<{ choice: Topping }>()
);
export const RemoveTopping = createAction(
  SaladActionTypes.RemoveTopping,
  props<{ choice: Topping }>()
);