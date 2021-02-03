import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { BackendService } from 'src/app/backend.service';
import * as UserActions from './actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  fetchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.fetchUsersOnStartup),
      switchMap(() => this.backendService.users()),
      map((users) =>
        UserActions.receivedUsersFromBackendSuccessfully({ users })
      )
    )
  );
}
