import { createReducer, on } from '@ngrx/store';

import { User } from '../+models';
import * as UserActions from './actions';

export const userFeatureKey = 'users';

export interface UserState {
  users: { [key: string]: User };
}

const initialUserState: UserState = {
  users: {},
};

export const userReducers = createReducer(
  initialUserState,
  on(UserActions.receivedUsersFromBackendSuccessfully, (state, { users }) => ({
    users: users.reduce(
      (userMap, user) => ({ ...userMap, [user.id]: user }),
      {}
    ),
  }))
);
