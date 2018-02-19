import React, { Component } from 'react';
import NewToDo from './NewToDo';
import ToDo from './ToDoItem';

export default class List extends Component {
  constructor(props){
    super(props);
    this.state={
      toDos:[],
    };
    this.deleteToDo=this.deleteToDo.bind(this);
    this.submitToDo=this.submitToDo.bind(this);
    this.toggleCompletion=this.toggleCompletion.bind(this);
  }

  submitToDo = (text) =>
    this.setState(({toDos}) => ({
      toDos: [{ complete: false, text }, ...this.state.toDos],
    }));


    toggleCompletion({text}){
      this.setState(({toDos})=>({
        toDos: toDos.map(
          toDo => toDo.text === text ? {complete : !toDo.complete, text}:toDo
        )
      }))
    }

  deleteToDo = (item) =>{
    this.setState(({toDos}) => ({
      toDos: toDos.filter(toDo => toDo.text !== item.text),
    }))
  };

  render() {

    return (
      <div className="list">
        <h1 className="list__header">todos</h1>
        <NewToDo submit={this.submitToDo} />

        {this.state.toDos.map(
          (item, id) =>
          <ToDo
            text={item.text}
            complete={item.complete}
            deleteToDo={this.deleteToDo.bind(this, item)}
            key={item.text}
            toggleCompletion={this.toggleCompletion.bind(this, item)}
          />)}

      </div>
    );
  }
}
