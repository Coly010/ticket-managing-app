import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetchUsersOnStartup } from './users/data-access';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(fetchUsersOnStartup());
  }
}
