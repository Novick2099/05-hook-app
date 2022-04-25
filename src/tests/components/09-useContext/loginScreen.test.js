import React from 'react';
import {mount} from "enzyme";
import {UserContext} from "../../../components/09-useContext/UserContext";
import {LoginScreen} from "../../../components/09-useContext/LoginScreen";
import {Button} from "@mui/material";


describe('',()=>{

  const user ={
    name: 'Carlos',
    email: 'carlos@gmail.com'
  }

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  it('Should Match Snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('Should simulate with expected argument',()=>{
    //todo llamar a una funcion en un test con parametros
    //wrapper.find('button').prop('onClick')();
    wrapper.find('#set_user').last().simulate('click');
    expect(setUser).toHaveBeenLastCalledWith({
      id: 123,
      name: 'Carlos',
      email: 'carlos@gmail.com'
    });
  });


});