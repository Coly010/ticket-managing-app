import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ticket } from '../../data-access';

@Component({
  selector: 'feat-ticket-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewComponent {
  @Output() newTicket = new EventEmitter<{ ticket: Ticket }>();

  ticketDescription: string;
  ticketAssignee: number;

  setAssignedUser({ userId }: { userId: number }) {
    this.ticketAssignee = userId;
  }

  addTicket() {
    this.newTicket.emit({
      ticket: {
        id: undefined,
        assigneeId: this.ticketAssignee,
        completed: false,
        description: this.ticketDescription,
      },
    });

    this.ticketDescription = undefined;
    this.ticketAssignee = undefined;
  }
}
