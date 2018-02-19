import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class NewToDo extends Component{
  constructor(props){
    super(props);
    this.state= {
      toDo : '',
    }
  //  this.handleChange=this.handleChange.bind(this);
    // this.submitToDo=this.submitToDo.bind(this);
  }

  handleChange=(evt)=>{
    let newToDo=evt.target.value;
    this.setState(()=>({
      toDo: newToDo,
    }));
  }


  submitToDo=(evt)=>{
    evt.preventDefault();
    var item=this.state.toDo;
    this.props.submit(item);
    this.setState(()=>({
      toDo:'',
    }))
  }



  render(){
    const emptySpace = this.state.toDo;

    return(
      <div>
       <form className="new-to-do" onSubmit={this.submitToDo}>
        <input type="text" className="new-to-do__input" value={emptySpace} onChange={this.handleChange} placeholder="What needs to be done next??" />
        <button type="submit" className="submit-button">Submit</button>
       </form>
      </div>
    )
  }
}

export default NewToDo;
