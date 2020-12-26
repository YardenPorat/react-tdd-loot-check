//chai+
import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';
import sinonChai from 'sinon-chai';
// Enzyme
import chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'; // React 16 Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // React 17 adapter:

// Sinon-chai
chai.use(sinonChai);

// Chai Jest Snapshot
chai.use(chaiJestSnapshot);

// Enzyme Config
chai.use(chaiEnzyme);
configure({
  adapter: new Adapter(),
});

//jsdom global for mount (enzyme)
require('jsdom-global')();

// eslint-disable-next-line no-undef
before(function () {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});
