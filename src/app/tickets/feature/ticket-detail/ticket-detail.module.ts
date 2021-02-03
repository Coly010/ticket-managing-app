import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TicketDetailComponent } from './ticket-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: TicketDetailComponent }];

@NgModule({
  declarations: [TicketDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
})
export class TicketDetailModule {}
