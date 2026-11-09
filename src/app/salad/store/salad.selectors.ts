import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SaladState } from "./salad.store";

const selectSaladState = createFeatureSelector<SaladState>('salad');

export const selectTotalPrice = createSelector(
    selectSaladState,
    (state: SaladState) => {
        let total = 0;
        state.chosenToppings.forEach((topping) => (total = total + topping.price));

        return total;
    }
)