import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { UserSelectComponent } from './user-select.component';

@NgModule({
  declarations: [UserSelectComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  exports: [UserSelectComponent],
})
export class UserSelectModule {}
