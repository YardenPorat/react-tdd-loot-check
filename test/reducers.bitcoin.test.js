import { bitcoinReducer } from '../src/reducers/bitcoin';
import { FETCH_BITCOIN } from '../src/actions/constants';

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };
  it('fetches and sets the bitcoin data', () => {
    bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData });
  });
});
