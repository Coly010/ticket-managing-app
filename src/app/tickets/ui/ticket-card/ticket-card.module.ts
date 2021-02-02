import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { TicketCardComponent } from './ticket-card.component';

@NgModule({
  declarations: [TicketCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [TicketCardComponent],
})
export class TicketCardModule {}
