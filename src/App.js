import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Link from './Link.js'
import DateComponent from './Date.js'


class App extends Component{
  render(){


    return(
      <div>
        <p>React element created!</p>
        <Link page="https://www.facebook.com/" children="My Portfolio"/>
        <DateComponent />

      </div>
    )
  }
}

export default App;
