// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from '../src/actions/constants';
import { fetchBitcoin } from '../src/actions/bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' } };

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse,
  { overwriteRoutes: true }
);

it('create an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
  store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).to.eq(expectedActions);
  });
});
