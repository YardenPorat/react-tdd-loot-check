import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from '../src/components/Wallet';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Wallet Component', () => {
  const props = { balance: 20, deposit: () => {}, withdraw: () => {} };
  const depositStub = sinon.stub(props, 'deposit');
  const withdrawStub = sinon.stub(props, 'withdraw');
  const wallet = shallow(<Wallet {...props} />);

  it('should render properly', () => {
    expect(wallet).to.matchSnapshot(true);
  });

  it('should display the balance from props 2 - test text', () => {
    expect(wallet.find('.balance').text()).to.eql('Wallet balance: 20$');
  });

  it('should render input box', () => {
    expect(wallet.find('.input-wallet').exists()).to.eq(true);
  });

  describe('when user types to wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('update the local wallet balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).to.eq(25);
    });

    describe('user want ot make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('dispatches the `deposit()` it receives from the props with local balance', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(depositStub).to.have.been.calledOnce;
        expect(depositStub).to.have.been.calledOnceWith(25);
      });
    });

    describe('user want ot make a withdrawal', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('dispatches the `withdraw()` it receives from the props with local balance', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(withdrawStub).to.have.been.calledOnce;
        expect(withdrawStub).to.have.been.calledOnceWith(25);
      });
    });
  });
});
