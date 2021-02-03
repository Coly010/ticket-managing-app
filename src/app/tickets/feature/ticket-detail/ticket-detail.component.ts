import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { selectUsersAsArray } from 'src/app/users/data-access';
import {
  selectTicketById,
  Ticket,
  userChangedAssignee,
  userClickedCompleteTicket,
} from '../../data-access';

@UntilDestroy()
@Component({
  selector: 'feat-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent {
  ticket$ = this.activatedRoute.params.pipe(
    switchMap(({ id }) =>
      this.store.select(selectTicketById, { ticketId: Number(id) })
    )
  );

  users$ = this.store.select(selectUsersAsArray);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  setAssignee({ userId }: { userId: number }, ticket: Ticket) {
    this.store.dispatch(userChangedAssignee({ ticket, assigneeId: userId }));
  }

  setCompleted(ticket: Ticket) {
    this.store.dispatch(userClickedCompleteTicket({ ticket }));
  }

  closePane() {
    this.router.navigateByUrl('/');
  }
}
