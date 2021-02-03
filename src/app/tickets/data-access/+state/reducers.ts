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
  })),
  on(TicketActions.userChangedAssignee, (state, { ticket, assigneeId }) => {
    const tickets = state.tickets.map((t) =>
      t.id === ticket.id ? { ...t, assigneeId } : t
    );

    return {
      tickets: [...tickets],
    };
  }),
  on(TicketActions.userClickedCompleteTicket, (state, { ticket }) => {
    const tickets = state.tickets.map((t) =>
      t.id === ticket.id ? { ...t, completed: !t.completed } : t
    );

    return {
      tickets: [...tickets],
    };
  })
);
