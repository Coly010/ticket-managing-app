import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { UiModule } from '../ui';
import { ShellComponent } from './+shell';
import { TicketListModule } from './ticket-list';
import {
  TicketEffects,
  ticketFeatureKey,
  ticketReducers,
} from '../data-access';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureKey, ticketReducers),
    EffectsModule.forFeature([TicketEffects]),
    UiModule,
    TicketListModule,
  ],
  exports: [ShellComponent],
})
export class FeatTicketsModule {}
