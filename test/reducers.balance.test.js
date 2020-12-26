import { balanceReducer } from '../src/reducers/balance';
import * as constants from '../src/actions/constants';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Balance Reducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      const result = balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        balance,
      });
      expect(result).to.eql(balance);
    });
  });

  it('should add to the balance', () => {
    const amount = 10;
    const initialState = 5;
    const result = balanceReducer(initialState, {
      type: constants.ADD_TO_BALANCE,
      amount,
    });
    expect(result).to.eql(amount + initialState);
  });

  it('Creates an action to withdraw from the balance', () => {
    const withdrawal = 3;
    const initialState = 13;

    const result = balanceReducer(initialState, {
      type: constants.WITHDRAW_BALANCE,
      withdrawal,
    });
    expect(result).to.eql(initialState - withdrawal);
  });
});
