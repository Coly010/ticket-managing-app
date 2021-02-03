import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ticket } from '../+models';
import { TicketState } from './reducers';

export const ticketFeatureKey = 'tickets';

export const selectTicketFeature = createFeatureSelector<TicketState>(
  ticketFeatureKey
);

export const selectTickets = createSelector(
  selectTicketFeature,
  (state) => state.tickets
);

export const selectTicketById = createSelector(
  selectTicketFeature,
  (state: TicketState, { ticketId }) =>
    state.tickets.find((ticket) => ticket.id === ticketId)
);
