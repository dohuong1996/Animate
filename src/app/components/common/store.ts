import { tassign } from 'tassign';
import * as constant from './actions';

export interface CommonState {
  exampleState: string;
}

export const COMMON_INITAL_STATE: CommonState = {
  exampleState: ''
};

function setStateExample(state, action) {
  return tassign(state, {
    exampleState: action.payload
  });
}

export function commonReducer(state = COMMON_INITAL_STATE, action): CommonState {

  switch (action.type) {
    case constant.ACTION_EXAMPLE: return setStateExample(state, action);
  }

  return state;
}
