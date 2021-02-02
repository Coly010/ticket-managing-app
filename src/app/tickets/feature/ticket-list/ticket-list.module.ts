import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/tickets/ui';
import { TicketListComponent } from './ticket-list.component';

@NgModule({
  declarations: [TicketListComponent],
  imports: [CommonModule, UiModule],
  exports: [TicketListComponent],
})
export class TicketListModule {}
