import React from 'react';
import {HooksApp} from "../HooksApp";
import {mount} from "enzyme";



describe('HookApp',()=>{
  it('Should match with snapShot', ()=>{
    const component = mount(<HooksApp/>);
    expect(component).toMatchSnapshot();
    console.log(component.html());
  });
});
