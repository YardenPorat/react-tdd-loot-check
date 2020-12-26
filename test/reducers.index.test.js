import rootReducer from '../src/reducers';
import { expect } from 'chai';

describe('rootReducer', () => {
  it('initializs the default state', () => {
    expect(rootReducer({}, {})).to.eql({ balance: 0, bitcoin: {} });
  });
});
