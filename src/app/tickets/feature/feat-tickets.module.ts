import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UiModule } from '../ui';
import {
  TicketEffects,
  ticketFeatureKey,
  ticketReducers,
} from '../data-access';

import { ShellComponent } from './+shell';
import { TicketListModule } from './ticket-list';
import { FeatTicketsRoutingModule } from './feat-tickets-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureKey, ticketReducers),
    EffectsModule.forFeature([TicketEffects]),
    FeatTicketsRoutingModule,
    UiModule,
    MatDividerModule,
    TicketListModule,
  ],
  exports: [ShellComponent],
})
export class FeatTicketsModule {}
