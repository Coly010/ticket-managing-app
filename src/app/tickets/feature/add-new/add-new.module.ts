import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { UserSelectModule } from 'src/app/users/feature';
import { AddNewComponent } from './add-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    UserSelectModule,
  ],
  exports: [AddNewComponent],
})
export class AddNewModule {}
