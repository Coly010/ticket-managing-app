import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { UiModule } from 'src/app/tickets/ui';
import { TicketListComponent } from './ticket-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ChipFilterActivePipe } from './pipes/chip-filter-active.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TicketListComponent, FilterPipe, ChipFilterActivePipe],
  imports: [
    CommonModule,
    UiModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [TicketListComponent],
})
export class TicketListModule {}
