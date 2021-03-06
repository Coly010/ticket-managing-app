import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounce, debounceTime } from 'rxjs/operators';

import { Ticket } from 'src/app/tickets/data-access';
import { User } from 'src/app/users/data-access';

import { TicketFilter } from './+models';

@UntilDestroy({
  checkProperties: true,
})
@Component({
  selector: 'feat-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  @Input() tickets: Ticket[];
  @Input() users: { [key: number]: User };
  @Output() openCard = new EventEmitter<{ ticketId: number }>();

  activeFilters: TicketFilter[] = [];
  searchValue: string;

  searchInput = new FormControl('');

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(untilDestroyed(this), debounceTime(200))
      .subscribe((value) => {
        this.searchValue = value;
        this.cdRef.detectChanges();
      });
  }

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
