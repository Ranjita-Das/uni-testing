import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class ToDoItem extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="to-do__item">
        <div className={this.props.complete? "to-do__info--complete":'to-do__info'}>
          <input
            type="checkbox"
            className="to-do__completion"
            checked={this.props.complete}
            onChange={this.props.toggleCompletion}
          />
          {this.props.text}
        </div>

        <button onClick={this.props.deleteToDo}>
          X
        </button>
      </div>
    )
  }
}

export default ToDoItem;
