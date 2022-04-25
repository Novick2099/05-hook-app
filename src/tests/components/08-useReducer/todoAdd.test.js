

import TodoAdd from "../../../components/08-useReducer/TodoAdd";
import {mount} from "enzyme";

describe('Test in todoAdd',() => {

  const handleAddTodo = jest.fn();
  const wrapper = mount(<TodoAdd
    handleAddTodo={handleAddTodo}
  />)

  it('Should match with snapshot',()=>{

    expect(wrapper).toMatchSnapshot();
});

  it('Don´t should call handleAddTodo',()=>{
    // todo llamar a una funcion que es una propiedad de un objeto en un test
    const formSubmit = wrapper.find('form').prop('onSubmit');
    // todo un evento es una funcion??
    formSubmit({ //todo estoy pasando la funcion como prop del form ??
      preventDefault() {
      }
    });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);

  });

  it('Should call handleAddTodo',()=>{
    const value = 'Aprender ApolloClient';

    //todo how to simulate a change in an input
    wrapper.find('input').simulate('change',{
      target: {
        value: value,
        name: 'description'
      }
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){}});

    const actionObj = {
      type: "add",
        payload: {
          id: expect.any(Number),
          desc:value,
          done:false,
        }
    }

    expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
    expect( handleAddTodo ).toHaveBeenCalledWith(actionObj);

    //No se esta reseteando
    //expect( wrapper.find('input').prop('value')).toBe('');

  });





});