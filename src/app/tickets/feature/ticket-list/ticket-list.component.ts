import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Ticket } from 'src/app/tickets/data-access';
import { User } from 'src/app/users/data-access';

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

  constructor() {}

  clickOpenCard(ticketId: number) {
    this.openCard.emit({ ticketId });
  }

  trackByTicketId(index: number, ticket: Ticket) {
    return ticket.id;
  }
}
