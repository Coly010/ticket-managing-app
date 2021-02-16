import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Ticket } from '../../data-access';

@Component({
  selector: 'feat-ticket-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewComponent {
  @Output() newTicket = new EventEmitter<{ ticket: Ticket }>();

  isValid$ = new BehaviorSubject(false);

  ticketDescription: string;
  ticketAssignee: number;

  setAssignedUser({ userId }: { userId: number }) {
    this.ticketAssignee = userId;

    this.userUpdatedForm();
  }

  userUpdatedForm() {
    this.isValid$.next(Boolean(this.ticketDescription || this.ticketAssignee));
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

    this.userUpdatedForm();
  }
}
