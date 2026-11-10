import { TestBed } from '@angular/core/testing';
import { ToppingsService } from './toppings';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { Topping } from '../models/topping.model';

describe('ToppingsService', () => {
  let service: ToppingsService;
  let httpController: HttpTestingController;
  const toppingsMock: Topping[] = [
    {
      id: 1,
      name: 'Feta',
      price: 1,
    },
    {
      id: 2,
      name: 'Cucumber',
      price: 3,
    },
    {
      id: 3,
      name: 'Carotts',
      price: 1,
    },
    {
      id: 4,
      name: 'Eggs',
      price: 3,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(ToppingsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get toppings list when calling getToppings()', async () => {
    const result = firstValueFrom(service.getToppings());

    const request = httpController.expectOne('https://retoolapi.dev/XDaOzA/toppings');
    expect(request.request.method).toBe('GET');
    request.flush(toppingsMock);

    expect(await result).toEqual(toppingsMock)
  });
});
