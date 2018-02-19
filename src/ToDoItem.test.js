import React from 'react';
import ToDo from './ToDoItem.js';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';


describe('to-do renders correctly', ()=>{

  it('displays the text based on props.text', ()=>{
    const toDo = shallow (
      <ToDo
        text="this is the text"
        complete={false}
        deleteToDo={()=> null}
        toggleCompletion={()=>null}
      />
    );

    expect(toDo.find('to-do__item').text()).toBe('this is the text');
  });



  // it('checkbox renders correctly', ()=>{
  //
  // });
  //
  // it('text renders correctly', ()=>{
  //
  // });
  //
  // it('delete button renders correctly', ()=>{
  //
  // });

})
