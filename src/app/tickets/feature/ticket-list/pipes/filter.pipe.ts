import { Pipe, PipeTransform } from '@angular/core';

import { Ticket } from 'src/app/tickets/data-access';

import { TicketFilter } from '../+models';

@Pipe({
  name: 'filterTickets',
})
export class FilterPipe implements PipeTransform {
  transform(tickets: Ticket[], filters: TicketFilter[]): Ticket[] {
    if (filters.includes('completed') && filters.includes('unassigned')) {
      return tickets.filter((t) => t.completed && !t.assigneeId);
    }

    if (filters.includes('unassigned')) {
      return tickets.filter((t) => !t.assigneeId);
    }

    if (filters.includes('completed')) {
      return tickets.filter((t) => t.completed);
    }

    return tickets;
  }
}
