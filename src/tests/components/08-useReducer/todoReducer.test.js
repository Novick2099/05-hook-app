const {todoReducer} = require("../../../components/08-useReducer/todoReducer");

const demoTodos = [{
  id: 1,
  desc: 'Aprender React',
  done: false
},{
  id: 2,
  desc: 'Aprender React',
  done: true
}];

describe('Test on todoReducer', ()=> {



  it('should return a state by defect',()=>{
    //mandar objeto vacio {}
    const state = todoReducer(demoTodos, {} )
    expect(state).toEqual(demoTodos);
  });

  it('should add a todo',()=>{
    const todoToItem = {
      id: 3,
      desc: 'Aprender GraphQL',
      done: false,
    };
    const action = {
      type: 'add',
      payload: todoToItem,
    }
    const state = todoReducer(demoTodos, action );

    expect(state.length).toBe(3);
    console.log("Usando operador spread en array",[...demoTodos,todoToItem]);
    console.log("usando concat",demoTodos.concat(todoToItem));
    expect(state).toEqual([...demoTodos,todoToItem]);
  });

  it('should test delete todo',()=>{
    const action = {
      type: 'delete',
      payload: 2,
    }
    const state = todoReducer(demoTodos,action);
    expect(state.length).toBe(1);
  });

  it('toogle should change done property in state',()=>{
    const action = {
      type: 'toggle',
      payload: 1
    }
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(2);
    expect(state[0].done).toBe(!demoTodos[0].done);
  });

});