import { FETCH_BITCOIN } from '../actions/constants';

export const bitcoinReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};
