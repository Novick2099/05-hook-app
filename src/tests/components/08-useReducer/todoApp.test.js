import React from 'react';
import TodoApp from "../../../components/08-useReducer/TodoApp";
import {act} from "@testing-library/react";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import {shallow} from "enzyme";
const {mount} = require("enzyme");

const demoTodos = [{
  id: 1,
  desc: 'Aprender React',
  done: false
},{
  id: 2,
  desc: 'Aprender React',
  done: true
}];

describe('Pruebas en TodoApp ',()=>{

  const wrapper = mount(<TodoApp />);
  const shallowTodoApp =shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(()=>{});

  it('Should match with snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('Sould add a todo',()=>{
    console.log(wrapper.find('TodoAdd').props());
    //todo investigar act in testing-library-react
    act(()=>{
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    });
    act(()=>{
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    wrapper.update();
    expect(wrapper.find(TodoListItem).length).toBe(2);
    console.log(wrapper.debug());
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    //Todo tip usar shallow para debuguear rapido y encontrar elementos
    // Combo
    console.log(shallowTodoApp.debug());
    expect(wrapper.text()).toContain('1');
  });
});