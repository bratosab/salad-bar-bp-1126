import { Service, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Service()
export class OrderService {
    public name = signal('');
    public tel = signal('');

    private chosenToppingsList = signal<Topping[]>([]);

    get chosenToppings() {
        return this.chosenToppingsList.asReadonly();
    }

    chooseTopping(newTopping: Topping) {
        this.chosenToppingsList.update(toppings => [...toppings, newTopping])
    }

    removeTopping(toppingToRemove: Topping) {
        this.chosenToppingsList.update(toppings => toppings.filter(t => t.id !== toppingToRemove.id))
    }
}
