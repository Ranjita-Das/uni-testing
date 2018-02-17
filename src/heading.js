import React from 'react'
import ReactDOM from 'react-dom'

class heading extends React.Component{
  render(){
    let heading = "This is the heading"
    return(
      <div>
        <div>{heading}</div>
        <div>50</div>
        <div>80</div>
        <div>100</div>
        <div>150</div>
      </div>
    )
  }
}

export default heading;
