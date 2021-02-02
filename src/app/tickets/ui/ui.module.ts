import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketCardModule } from './ticket-card';

@NgModule({
  imports: [CommonModule, TicketCardModule],
  exports: [TicketCardModule],
})
export class UiModule {}
