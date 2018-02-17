import React from 'react'
import Heading from './heading.js'
import renderer from 'react-test-renderer'

it('renders heading correctly',()=>{
  const tree2= renderer.create(<Heading />);
  expect(tree2).toMatchSnapshot();
});
