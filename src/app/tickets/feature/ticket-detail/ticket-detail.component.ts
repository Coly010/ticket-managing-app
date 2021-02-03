import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs/operators';

import { BackendService } from 'src/app/backend.service';
import {
  selectTicketById,
  Ticket,
  TicketState,
  userChangedAssignee,
  userClickedCompleteTicket,
} from '../../data-access';

@UntilDestroy()
@Component({
  selector: 'feat-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticket$ = this.activatedRoute.params.pipe(
    switchMap(({ id }) =>
      this.store.select(selectTicketById, { ticketId: Number(id) })
    )
  );

  users$ = this.backendService.users();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<TicketState>,
    private backendService: BackendService
  ) {}

  ngOnInit() {}

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
