import { Pipe, PipeTransform } from '@angular/core';

import { Ticket } from 'src/app/tickets/data-access';

import { TicketFilter } from '../+models';

@Pipe({
  name: 'filterTickets',
})
export class FilterPipe implements PipeTransform {
  transform(
    tickets: Ticket[],
    filters: TicketFilter[],
    searchValue: string
  ): Ticket[] {
    const matchingTickets = searchValue
      ? tickets.filter((t) =>
          t.description.toLowerCase().includes(searchValue.toLowerCase())
        )
      : tickets;

    if (filters.includes('completed') && filters.includes('unassigned')) {
      return matchingTickets.filter((t) => t.completed && !t.assigneeId);
    }

    if (filters.includes('unassigned')) {
      return matchingTickets.filter((t) => !t.assigneeId);
    }

    if (filters.includes('completed')) {
      return matchingTickets.filter((t) => t.completed);
    }

    return matchingTickets;
  }
}
