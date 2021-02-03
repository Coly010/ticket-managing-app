import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../+models';
import { userFeatureKey, UserState } from './reducers';

export const selectUserFeature = createFeatureSelector<UserState>(
  userFeatureKey
);

export const selectUsers = createSelector(
  selectUserFeature,
  (state) => state.users
);

export const selectUsersAsArray = createSelector(selectUserFeature, (state) =>
  Object.values(state.users)
);

export const selectUserById = createSelector(
  selectUserFeature,
  (state: UserState, { userId }) => state.users[userId]
);
