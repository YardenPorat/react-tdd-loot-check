import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from '../src/components/Loot';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Loot Component', () => {
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: () => {} };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).to.matchSnapshot();
  });

  describe('when mounted', () => {
    let fetchBitcoinStub;
    var sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should activate componentDidMount', () => {
      sandbox.spy(Loot.prototype, 'componentDidMount');
      loot = mount(<Loot {...props} />);
      expect(Loot.prototype.componentDidMount).to.have.property('callCount', 1);
    });

    it('dispatches the `fetchBitcoin()` method from props', () => {
      fetchBitcoinStub = sandbox.stub(props, 'fetchBitcoin');
      loot = mount(<Loot {...props} />);
      // eslint-disable-next-line no-unused-expressions
      expect(fetchBitcoinStub).to.have.been.calledOnce;
      expect(fetchBitcoinStub).to.have.been.calledWith(); //nothing
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: '1,000' } } },
        fetchBitcoin: () => {},
      };
      loot = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).to.eql('Bitcoin Balance: 0.01$');
    });
  });
});
