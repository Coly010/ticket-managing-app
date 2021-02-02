import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Ticket } from 'src/app/tickets/data-access';
import { User } from 'src/app/users/data-access';

@Component({
  selector: 'ui-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketCardComponent {
  @Input() ticket: Ticket;
  @Input() user: User;
}
