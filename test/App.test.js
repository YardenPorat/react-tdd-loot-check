import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('renders learn react link', () => {
  const app = shallow(<App />);
  it('renders properly', () => {
    expect(app).to.matchSnapshot(true);
  });

  it('contains a Connect(Wallet) component', () => {
    expect(app.find('Connect(Wallet)').exists()).to.eq(true);
  });

  it('contains a Connect(Loot) component', () => {
    expect(app.find('Connect(Loot)').exists()).to.eq(true);
  });

  it('contains a link to the coindesk price page', () => {
    expect(app.find('a').props().href).to.eq('https://www.coindesk.com/price');
  });
});
