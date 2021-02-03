import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Ticket } from 'src/app/tickets/data-access';
import { User } from 'src/app/users/data-access';

/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */

function randomDelay() {
  return Math.random() * 4000;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  storedTickets: Ticket[] = [
    {
      id: 0,
      description: 'Install a monitor arm',
      assigneeId: 111,
      completed: false,
    },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: false,
    },
  ];

  storedUsers: User[] = [{ id: 111, name: 'Victor' }];

  lastId = 1;

  constructor() {}

  private findTicketById = (id) =>
    this.storedTickets.find((ticket) => ticket.id === +id);
  private findUserById = (id) =>
    this.storedUsers.find((user) => user.id === +id);

  tickets() {
    return of(this.storedTickets).pipe(delay(randomDelay()));
  }

  ticket(id: number): Observable<Ticket> {
    return of(this.findTicketById(id)).pipe(delay(randomDelay()));
  }

  users() {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  user(id: number) {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  newTicket(payload: { description: string }) {
    const newTicket: Ticket = {
      id: ++this.lastId,
      description: payload.description,
      assigneeId: null,
      completed: false,
    };

    return of(newTicket).pipe(
      delay(randomDelay()),
      tap(
        (ticket: Ticket) =>
          (this.storedTickets = [...this.storedTickets, ticket])
      )
    );
  }

  assign(ticketId: number, userId: number) {
    const isUserUnassigningTicket = userId === undefined;

    const foundTicket = this.findTicketById(+ticketId);
    const user = this.findUserById(+userId);

    const canReassign =
      (foundTicket && isUserUnassigningTicket) || (foundTicket && user);

    if (canReassign) {
      this.storedTickets = this.storedTickets.map((t) =>
        t.id === ticketId ? { ...t, assigneeId: userId } : t
      );

      return of({ ...foundTicket, assigneeId: userId }).pipe(
        delay(randomDelay())
      );
    }

    return throwError(new Error('ticket or user not found'));
  }

  complete(ticketId: number, completed: boolean) {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      this.storedTickets = this.storedTickets.map((t) =>
        t.id === ticketId ? { ...t, completed } : t
      );
      return of({ ...foundTicket, completed }).pipe(delay(randomDelay()));
    }

    return throwError(new Error('ticket not found'));
  }
}
