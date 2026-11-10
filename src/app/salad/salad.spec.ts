import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Salad } from './salad';
import { provideStore } from '@ngrx/store';
import { appReducer } from '../store/app.store';
import { saladReducer } from './store/salad.store';

describe('Salad', () => {
  let component: Salad;
  let fixture: ComponentFixture<Salad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salad],
      providers: [provideStore({ app: appReducer, salad: saladReducer })]
    }).compileComponents();

    fixture = TestBed.createComponent(Salad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
