import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Link from './Link.js'
import Heading from './heading.js'


class App extends Component{
  render(){


    return(
      <div>
        <p>React element has been created!</p>
        <Link page="https://facebook.github.io/jest/docs/en/mock-functions.html" children="My Portfolio"/>

        <Heading />

      </div>
    )
  }
}

export default App;
