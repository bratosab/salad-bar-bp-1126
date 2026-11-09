import { createReducer, on } from '@ngrx/store';
import { Status } from '../models/status.model';
import { SetName, SetStatus, SetTel } from './app.actions';

export interface AppState {
  name: string;
  tel: string;
  status: Status;
}

export const initialState: AppState = {
  name: '',
  tel: '',
  status: Status.New,
};

export const appReducer = createReducer(
    initialState,
    on(SetName, (state, action) => {
        return { ...state, name: action.name }
    }),
    on(SetTel, (state, action) => {
        return { ...state, tel: action.tel }
    }),
    on(SetStatus, (state, action) => {
        return { ...state, status: action.status }
    })
)