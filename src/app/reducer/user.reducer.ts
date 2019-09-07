import { Action } from '@ngrx/store';
import { User } from './../models/user.model';
import * as userActions from '../action/user.action';
import { UserState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: UserState = { user: [] };

export function reducer(state = initialState, action: userActions.Actions): UserState {
  switch(action.type) {
    case userActions.LIST_USER_SUCCESS: {
			const list = action.payload
      return {
					user: [list]
        };
    }
    case userActions.LIST_USER_FAILED: {
      return {user: []};
    }
    default: {
      return state;
    }
  }
}

export const getArticleState = createFeatureSelector<UserState>('userState');

export const getArticles = createSelector(
    getArticleState,
    (state: UserState) => state.user
);
