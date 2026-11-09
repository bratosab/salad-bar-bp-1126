import { createAction, props } from '@ngrx/store';
import { Status } from '../models/status.model';

export const SetName = createAction('app/order/set-name', props<{ name: string }>());
export const SetTel = createAction('app/order/set-tel', props<{ tel: string }>());
export const SetStatus = createAction('app/order/set-status', props<{ status: Status }>());
