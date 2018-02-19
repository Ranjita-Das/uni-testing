import React from 'react';
import ToDo from './ToDoItem.js';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';


describe('to-do renders correctly', ()=>{

  it('displays the text based on props.text', ()=>{
    const wrapper = shallow (
      <ToDo
        text="this is the text"
        complete={false}
        deleteToDo={()=> null}
        toggleCompletion={()=>null}
      />
    );

    expect(wrapper.find('.to-do__info').text()).toBe("this is the text");
  });



   it('changes class based on props.complete', ()=>{
     const wrapperComplete = shallow(
       <ToDo
         text="this is the text"
         complete={true}
         deleteToDo={()=> null}
         toggleCompletion={()=>null}
       />
     )
     const wrapperIncomplete = shallow(
       <ToDo
         text="this is the text"
         complete={false}
         deleteToDo={()=> null}
         toggleCompletion={()=>null}
       />
     );
    expect(toJson(wrapperComplete)).toMatchSnapshot();
    expect(toJson(wrapperIncomplete)).toMatchSnapshot();

    expect(wrapperIncomplete.find('input').prop('complete')).toBeFalsy;
  });

  it('ToDo calls toggleCompletion on checkbox change', ()=>{

    const toggleCompletionSpy = jest.fn();
    const wrapper = shallow(
      <ToDo
        text="this is the text"
        complete={true}
        deleteToDo={()=> null}
        toggleCompletion={toggleCompletionSpy}
      />
      );

      wrapper.find('.to-do__completion').simulate('change');
      expect(toggleCompletionSpy).toHaveBeenCalled();
  });

  it('toDo calls DeleteToDo on clicking delete button', ()=>{
    const deleteToDoSpy = jest.fn();
    const wrapper = shallow(
      <ToDo
        text="this is the text"
        complete={true}
        deleteToDo={deleteToDoSpy}
        toggleCompletion={()=>null}
      />
      );

      wrapper.find('.button--delete').simulate('click');
      expect(deleteToDoSpy).toHaveBeenCalled();
  });

})
