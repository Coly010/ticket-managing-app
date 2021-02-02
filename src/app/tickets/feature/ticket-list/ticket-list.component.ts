import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BackendService } from 'src/app/backend.service';
import {
  fetchTicketListOnInit,
  selectTickets,
  Ticket,
  TicketState,
} from 'src/app/tickets/data-access';

@Component({
  selector: 'feat-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets$ = this.store.select(selectTickets);
  users$: any;

  constructor(
    private store: Store<TicketState>,
    private backendService: BackendService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTicketListOnInit());
    this.users$ = this.backendService.users();
  }

  openCard(ticketId: number) {
    this.router.navigateByUrl(`/ticket/${ticketId}`);
  }

  trackByTicketId(index: number, ticket: Ticket) {
    return ticket.id;
  }
}
