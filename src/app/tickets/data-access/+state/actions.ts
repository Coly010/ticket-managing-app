import { createAction, props } from '@ngrx/store';
import { Ticket } from '../+models';

export const fetchTicketListOnInit = createAction(
  '[TICKET LIST] Fetch Ticket List On Init'
);

export const ticketsFetchedSuccessfully = createAction(
  '[TICKET LIST] Tickets fetched successfully',
  props<{ tickets: Ticket[] }>()
);
