import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { BackendService } from 'src/app/backend.service';

import * as TicketActions from './actions';

@Injectable()
export class TicketEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService,
    private toast: HotToastService
  ) {}

  loadTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.fetchTicketListOnInit),
      switchMap(() =>
        this.backendService.tickets().pipe(
          this.toast.observe({
            loading: 'Loading...',
            success: 'Fetched Tickets!',
            error: 'An error occurred, please try again...',
          })
        )
      ),
      map((tickets) => TicketActions.ticketsFetchedSuccessfully({ tickets }))
    )
  );

  addNewTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.addNewTicket),
      switchMap(({ ticket }) =>
        this.backendService.newTicket(ticket).pipe(
          switchMap((newTicket) =>
            ticket.assigneeId
              ? this.backendService.assign(newTicket.id, ticket.assigneeId)
              : of(newTicket)
          ),
          this.toast.observe({
            loading: 'Creating...',
            success: 'Ticket created!',
            error: 'An error occurred, please try again...',
          })
        )
      ),
      map((newTicket) =>
        TicketActions.ticketAddedSuccessfully({ ticket: newTicket })
      )
    )
  );

  changeTicketAssignee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.userChangedAssignee),
      switchMap(({ ticket, assigneeId }) =>
        this.backendService.assign(ticket.id, assigneeId).pipe(
          this.toast.observe({
            loading: 'Updating...',
            success: 'Ticket updated!',
            error: 'An error occurred, please try again...',
          })
        )
      ),
      map((ticket) => TicketActions.assigneeChangedSuccessfully({ ticket }))
    )
  );

  completeTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.userClickedCompleteTicket),
      switchMap(({ ticket }) =>
        this.backendService.complete(ticket.id, !ticket.completed).pipe(
          this.toast.observe({
            loading: 'Updating...',
            success: 'Ticket updated!',
            error: 'An error occurred, please try again...',
          })
        )
      ),
      map((ticket) => TicketActions.ticketCompletedSuccessfully({ ticket }))
    )
  );
}
