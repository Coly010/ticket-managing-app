import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketState } from './reducers';

export const ticketFeatureKey = 'tickets';

export const selectTicketFeature = createFeatureSelector<TicketState>(
  ticketFeatureKey
);

export const selectTickets = createSelector(
  selectTicketFeature,
  (state) => state.tickets
);
