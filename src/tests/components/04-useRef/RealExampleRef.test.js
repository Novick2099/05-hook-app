import RealExampleRef from "../../../components/04-useRef/RealExampleRef";
import {mount, shallow} from "enzyme";
import React from "react";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";

describe('Test in Real ExampleRef',() => {

  it('Should match to snapshot',()=>{
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show <MultipleCustomHooks/>  when click on button',()=>{

    const wrapper = mount(<RealExampleRef />);
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    const showButton = wrapper.find('#showButton').last();
    showButton.simulate('click');
    wrapper.update();
    //todo buscar un componente en los test
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  });

});