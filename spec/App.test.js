import React from 'react';
import enzyme, { shallow } from 'enzyme';
import App from '../client/src/App';


describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
});
