import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Topping } from '../models/topping.model';

@Service()
export class ToppingsService {
    private http = inject(HttpClient)

    getToppings() {
        return this.http.get<Topping[]>("https://retoolapi.dev/XDaOzA/toppings")
    }
}
