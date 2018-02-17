import React from 'react';
import Link from './Link.js';
import renderer from 'react-test-renderer';

it('the link renders correctly',()=>{
  const tree= renderer.create(<Link page="https://www.ranjitadas.com/" />).toJSON();
  expect(tree).toMatchSnapshot();
});
