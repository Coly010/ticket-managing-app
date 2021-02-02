import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

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
}
