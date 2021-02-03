import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Ticket } from 'src/app/tickets/data-access';
import { User } from 'src/app/users/data-access';

import { TicketFilter } from './+models';

@Component({
  selector: 'feat-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent {
  @Input() tickets: Ticket[];
  @Input() users: { [key: number]: User };
  @Output() openCard = new EventEmitter<{ ticketId: number }>();

  activeFilters: TicketFilter[] = [];

  constructor() {}

  clickOpenCard(ticketId: number) {
    this.openCard.emit({ ticketId });
  }

  updateActiveFilters(filter: TicketFilter) {
    if (this.activeFilters.includes(filter)) {
      this.activeFilters = this.activeFilters.filter((f) => f !== filter);
      return;
    }
    this.activeFilters = [...this.activeFilters, filter];
  }

  trackByTicketId(index: number, ticket: Ticket) {
    return ticket.id;
  }
}
