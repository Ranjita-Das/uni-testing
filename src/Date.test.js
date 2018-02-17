import React from 'react';
import DateComponent from './Date.js';
import renderer from 'react-test-renderer';

it('renders date correctly',()=>{
  const tree=renderer.create(<Date />).toJSON();
  expect(tree).toMatchSnapshot();
});
