import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TicketDetailComponent } from './ticket-detail.component';

const routes: Routes = [{ path: '', component: TicketDetailComponent }];

@NgModule({
  declarations: [TicketDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TicketDetailModule {}
