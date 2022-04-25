import React from 'react';
import {UserContext} from "../../../components/09-useContext/UserContext";
import {HomeScreen} from "../../../components/09-useContext/HomeScreen";
import {mount} from "enzyme";

describe('Tests on HomeScreen',()=>{

  const user ={
    name: 'Carlos',
    email: 'carlos@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
    <HomeScreen />
    </UserContext.Provider>
  )

  it('should match with snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
  });
});
