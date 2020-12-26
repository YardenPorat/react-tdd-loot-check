import React from 'react';
import Wallet from './components/Wallet';
import Loot from './components/Loot';

const App = () => {
  return (
    <div className='App'>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
      <div>
        Rates by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.coindesk.com/price'
        >
          Coindesk
        </a>
      </div>
    </div>
  );
};

export default App;
