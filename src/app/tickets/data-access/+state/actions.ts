import { createAction, props } from '@ngrx/store';
import { Ticket } from '../+models';

export const fetchTicketListOnInit = createAction(
  '[TICKET LIST] Fetch Ticket List On Init'
);

export const ticketsFetchedSuccessfully = createAction(
  '[TICKET LIST] Tickets fetched successfully',
  props<{ tickets: Ticket[] }>()
);

export const userClickedCompleteTicket = createAction(
  '[TICKET DETAILS] User clicked complete ticket',
  props<{ ticket: Ticket }>()
);

export const ticketCompletedSuccessfully = createAction(
  '[TICKET EFFECTS] Ticket completed successfully',
  props<{ ticket: Ticket }>()
);

export const userChangedAssignee = createAction(
  '[TICKET DETAILS] User changed ticket assignee',
  props<{ ticket: Ticket; assigneeId: number }>()
);

export const assigneeChangedSuccessfully = createAction(
  '[TICKET EFFETCS] Successfully changed ticket assignee',
  props<{ ticket: Ticket }>()
);

export const addNewTicket = createAction(
  '[TICKET] User added new ticket',
  props<{ ticket: Ticket }>()
);

export const ticketAddedSuccessfully = createAction(
  '[TICKET EFFECTS] Ticket added successfully',
  props<{ ticket: Ticket }>()
);
