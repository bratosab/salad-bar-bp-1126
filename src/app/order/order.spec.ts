import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Order } from './order';
import { provideStore } from '@ngrx/store';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order],
      providers: [provideStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
