import * as constants from '../src/actions/constants';
import * as actions from '../src/actions/balance';
import { expect } from 'chai';

it('creates an action to set the balance - deep eq', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).to.deep.eq(expectedAction);
});
it('creates an action to set the balance - eql', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).to.be.eql(expectedAction);
});
it('creates an action to set the balance - eqls', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).to.be.eqls(expectedAction);
});

it('creates an action to ADD to the balance', () => {
  const amount = 2;
  const expectedAction = { type: constants.ADD_TO_BALANCE, amount };
  expect(actions.deposit(amount)).to.be.eqls(expectedAction);
});

it('creates an action to WITHDRAW from the balance', () => {
  const withdrawal = 2;
  const expectedAction = { type: constants.WITHDRAW_BALANCE, withdrawal };
  expect(actions.withdraw(withdrawal)).to.be.eqls(expectedAction);
});
