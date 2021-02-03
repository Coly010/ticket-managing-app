import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BackendService } from 'src/app/backend.service';

import {
  fetchTicketListOnInit,
  selectTickets,
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

  isDetailsPaneOpen = this.router.url.includes('ticket');

  constructor(
    private store: Store<TicketState>,
    private router: Router,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTicketListOnInit());
  }

  openCardDetails({ ticketId }: { ticketId: number }) {
    this.isDetailsPaneOpen = true;
    this.router.navigateByUrl(`/ticket/${ticketId}`);
  }
}
