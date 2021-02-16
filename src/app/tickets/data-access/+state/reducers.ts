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
  on(TicketActions.assigneeChangedSuccessfully, (state, { ticket }) => {
    const tickets = state.tickets.map((t) =>
      t.id === ticket.id ? { ...ticket } : t
    );

    return {
      ...state,
      tickets: [...tickets],
    };
  }),
  on(TicketActions.ticketCompletedSuccessfully, (state, { ticket }) => {
    const tickets = state.tickets.map((t) =>
      t.id === ticket.id ? { ...ticket } : t
    );

    return {
      tickets: [...tickets],
    };
  }),
  on(TicketActions.ticketAddedSuccessfully, (state, { ticket }) => {
    return {
      ...state,
      tickets: [...state.tickets, ticket],
    };
  }),
  on(TicketActions.userClickedCompleteTicket, (state, { ticket }) => {
    return {
      ...state,
      tickets: [
        ...state.tickets.map((t) =>
          t.id === ticket.id
            ? { ...ticket, completed: !ticket.completed }
            : { ...t }
        ),
      ],
    };
  }),
  on(TicketActions.ticketCompletionFailedAtDAL, (state, { ticket }) => {
    return {
      ...state,
      tickets: [
        ...state.tickets.map((t) =>
          t.id === ticket.id
            ? { ...ticket, completed: ticket.completed }
            : { ...t }
        ),
      ],
    };
  })
);
