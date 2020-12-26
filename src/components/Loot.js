import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  calcBitcoinBalance() {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return '';

    const rate = parseInt(bitcoin.bpi.USD.rate.replace(',', ''));
    const bitcoinBalance = this.props.balance / rate;
    return bitcoinBalance;
  }

  render() {
    return (
      <div>
        <h3>Bitcoin Balance: {this.calcBitcoinBalance()}$</h3>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin })(Loot);
