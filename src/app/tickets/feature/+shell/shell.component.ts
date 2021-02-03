import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

import { BackendService } from 'src/app/backend.service';

import {
  addNewTicket,
  fetchTicketListOnInit,
  selectTickets,
  Ticket,
  TicketState,
} from '../../data-access';

@Component({
  selector: 'feat-tickets-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  tickets$ = this.store.select(selectTickets);
  users$ = this.backendService.users();

  isDetailsPaneOpen$ = of({}).pipe(
    switchMap(() =>
      this.router.events.pipe(
        // This is a deprecated operator, however, I cannot find it's replacment on the docs site
        startWith(undefined),
        map((event) => [event, this.router.url.includes('ticket')])
      )
    ),
    map(([routerEvent, initialCheck]: [RouterEvent, boolean]) =>
      !routerEvent ? initialCheck : routerEvent?.url?.includes('ticket')
    )
  );

  constructor(
    private store: Store<TicketState>,
    private router: Router,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTicketListOnInit());
  }

  openCardDetails({ ticketId }: { ticketId: number }) {
    this.router.navigateByUrl(`/ticket/${ticketId}`);
  }

  addNewTicket(ticket: { ticket: Ticket }) {
    this.store.dispatch(addNewTicket(ticket));
  }
}
