import React from 'react'
import ReactDOM from 'react-dom'

class DateComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let date=Date.now();
    return(
      <p>{date || 'Default'}</p>
    )

  }
}

export default DateComponent;
