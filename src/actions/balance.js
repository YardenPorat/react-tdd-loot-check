import * as constants from './constants';

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance,
  };
};

export const deposit = amount => {
  return {
    type: constants.ADD_TO_BALANCE,
    amount,
  };
};

export const withdraw = withdrawal => {
  return {
    type: constants.WITHDRAW_BALANCE,
    withdrawal,
  };
};
