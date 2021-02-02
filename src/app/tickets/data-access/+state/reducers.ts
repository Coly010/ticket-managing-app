import { createReducer, on } from '@ngrx/store';

import { Ticket } from '../+models';
import * as TicketActions from './actions';

export interface TicketState {
  tickets: Ticket[];
}

const initialState: TicketState = {
  tickets: [],
};

export const ticketReducers = createReducer(
  initialState,
  on(TicketActions.ticketsFetchedSuccessfully, (state, { tickets }) => ({
    tickets,
  }))
);
