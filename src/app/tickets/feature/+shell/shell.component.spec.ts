import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotToastModule } from '@ngneat/hot-toast';

import { UserFeatureModule } from 'src/app/users/feature';
import { FeatTicketsModule } from '../feat-tickets.module';
import { ShellComponent } from './shell.component';

describe('Integration - Ticket Managing App', () => {
  const mount = async () => {
    const comp = await render(ShellComponent, {
      imports: [
        StoreModule.forRoot([]),
        EffectsModule.forRoot(),
        RouterModule.forRoot([]),
        FeatTicketsModule,
        UserFeatureModule,
        HotToastModule,
      ],
      providers: [],
      excludeComponentDeclaration: true,
    });

    // With server delay, we need to pause the test to allow tickets to load
    await new Promise((res) => setTimeout(() => res(true), 5000));
    return comp;
  };

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  });

  it('should render the ticket feature correctly', async () => {
    // ARRANGE
    const comp = await mount();

    // ASSERT
    expect(screen.getByText('Add New Ticket')).toBeTruthy();
  });

  it('should add a new ticket correctly', async () => {
    // ARRANGE
    const comp = await mount();

    const descriptionElement = screen.getByLabelText('Description');
    const addButton = screen.getByRole('button');

    // ACT
    userEvent.type(descriptionElement, 'My New Ticket');
    userEvent.click(addButton);

    // ASSERT
    const newTicketElement = await screen.findByTestId(
      'ticket-card-id-2',
      undefined,
      { timeout: 5000 }
    );

    expect(newTicketElement).toBeTruthy();
  });

  it('should route to details correctly', async () => {
    // ARRANGE
    const comp = await mount();
    const newTicketElement = await createNewTicket();

    // ACT
    userEvent.click(newTicketElement);

    // ASSERT
    const ticketDetailsDescription = await screen.findByTestId(
      'ticket-details-description'
    );
    expect(ticketDetailsDescription.innerText).toContain('My New Ticket');
  });

  // NOTE THESE TESTS ARE COMMENTED OUT AS THERE ARE CURRENTLY SOME ISSUES WITH
  // HOW THE STORE IS BEING RE-UPDATED ON EVERY NEW TEST
  // THIS IS THE DOWNFALL OF INTEGRATION TESTING VIA KARMA + JASMINE

  //   it('should complete ticket correctly', async () => {
  //     // ARRANGE
  //     const comp = await mount();
  //     await createAndOpenTicket();
  //     await new Promise((res) => setTimeout(() => res(true), 5000));

  //     const completedCheckbox = await screen.findByLabelText(
  //       'Completed',
  //       undefined,
  //       { timeout: 5000 }
  //     );

  //     // ACT
  //     userEvent.click(completedCheckbox);
  //     // With server delay, we need to pause the test
  //     await new Promise((res) => setTimeout(() => res(true), 6500));

  //     // ASSERT
  //     expect(document.querySelector('.mat-card-title.completed')).toBeTruthy();
  //   });

  // it('should reassign ticket correctly', async () => {
  //   // ARRANGE
  //   const comp = await mount();
  //   await createAndOpenTicket();

  //   const reassignSelect = await screen.findByLabelText(
  //     'Assigned To',
  //     undefined,
  //     { timeout: 5000 }
  //   );

  //   // ACT
  //   userEvent.click(reassignSelect);
  //   // Unassign option is always first, select the second option
  //   const option = (await screen.findAllByRole('option'))[1];
  //   userEvent.click(option);
  //   // With server delay, we need to pause the test
  //   await new Promise((res) => setTimeout(() => res(true), 5000));

  //   // ASSERT
  //   const ticket = await findNewTicket();
  //   const assignedToElement = ticket.querySelector('mat-card-subtitle');
  //   expect(assignedToElement.innerHTML).toContain('Victor');
  // });
});

// HELPER METHODS
async function findNewTicket() {
  return (
    await screen.findAllByTestId('ticket-card-id-2', undefined, {
      timeout: 5000,
    })
  )[0];
}

function createNewTicket() {
  const descriptionElement = screen.getByLabelText('Description');
  const addButton = screen.getByRole('button');
  userEvent.type(descriptionElement, 'My New Ticket');
  userEvent.click(addButton);

  return findNewTicket();
}

async function createAndOpenTicket() {
  const ticket = await createNewTicket();
  userEvent.click(ticket);

  return ticket;
}
