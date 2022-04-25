import React from 'react';
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import {shallow} from "enzyme";
import {useFetch} from "../../../hooks/useFetch";
import {useCounter} from "../../../hooks/useCounter";


jest.mock("../../../hooks/useCounter");
jest.mock("../../../hooks/useFetch");
//todo mocks a function (search in documentation)
describe('Pruebas en MultipleCustomHooks',()=>{

  useCounter.mockReturnValue({
    counter: 10,
    increment: jest.fn(),
  });

  it('Should match agains snapshot',() => {
// todo mock a return for the mocked function how it should be the first time the component renders
    useFetch.mockReturnValue({
        data: null,
      loading: true,
      error: null,
    })
    useCounter.mockReturnValue({
      counter: 10,
      increment: jest.fn(),
    });

    const wrapper = shallow(<MultipleCustomHooks/>);
    expect(wrapper).toMatchSnapshot();



  });

  it('should show information',() => {

    useCounter.mockReturnValue({
      counter: 10,
      increment: jest.fn(),
    });
    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando Herrera',
        quote: 'Hola mundo'
      }],
      loading: false,
      error: 'Error',
    });
    const wrapper = shallow (<MultipleCustomHooks />);
    console.debug(wrapper.html());
    //los esta encontrando pero no los esta pasando ]??
    expect( wrapper.find("[data-id='alert']").exists()).toBe(false);
    expect( wrapper.find("[data-id='author']").text()).toBe('Fernando Herrera');
    expect( wrapper.find("[data-id='quote']").text()).toBe('Hola mundo')
  });

});