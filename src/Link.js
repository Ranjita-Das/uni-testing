import React from 'react'
import ReactDOM from 'react-dom'

class Link extends React.Component{
  constructor(props){
    super(props);
    this.state={
      class: "Come To Me",
    }
    this._onMouseEnter=this._onMouseEnter.bind(this);
    this._onMouseLeave=this._onMouseLeave.bind(this);
  }

  _onMouseEnter(){
    this.setState({
      class: "You Are On Me",
    })
  }

  _onMouseLeave(){
    this.setState({
      class: "Come To Me",
    })
  }

  render(){
    return(
      <a
        href={this.props.page || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.state.class || "Link"}
      </a>
    )
  }
}

export default Link;
