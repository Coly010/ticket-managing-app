import { createAction, props } from '@ngrx/store';
import { User } from '../+models';

export const fetchUsersOnStartup = createAction('[APP LOAD] Fetch Users');

export const receivedUsersFromBackendSuccessfully = createAction(
  '[USERS] Received users successfully',
  props<{ users: User[] }>()
);
