import * as constants from '../actions/constants';

export const balanceReducer = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.ADD_TO_BALANCE:
      balance = action.amount + state;
      break;
    case constants.WITHDRAW_BALANCE:
      balance = state - action.withdrawal;
      break;
    default:
      balance = state;
  }
  return balance;
};
