import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';

import { selectUsersAsArray, User, UserState } from '../../data-access';

@Component({
  selector: 'feat-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css'],
})
export class UserSelectComponent {
  @Input() label = 'Assign To';
  @Input() selectedValue: number;
  @Output() selectUser = new EventEmitter<{ userId: number }>();

  users$ = this.store.select(selectUsersAsArray);

  constructor(private store: Store<UserState>) {}

  userSelected({ value }: MatSelectChange) {
    this.selectUser.emit({ userId: value });
  }

  trackUsersById(index: number, item: User) {
    return item.id;
  }
}
