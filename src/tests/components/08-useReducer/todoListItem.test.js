import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import {mount, shallow} from "enzyme";
import IconButton from "@material-ui/core/IconButton";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

describe('Test in TodoListItem',()=>{

  const newToDo = {
    id: 1,
    desc: 'Leer Java OCP 8',
    done: false,
  }

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = mount(
    <TodoListItem
    key={1}
    todo={newToDo}
    index={0}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
  />);


  it('Should match again snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
    console.log(wrapper.debug());
  });

  it('Should call delete function', ()=>{
    const deleteButton = wrapper.find('[aria-label="delete"]').first();
    deleteButton.simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(newToDo.id);
  })

  //todo Como simular click cuando onClick es un evento añadido listItem
  it('Should Call handleToggle',()=>{
    //todo 'button' funciona porque button es parte de html, pero con 'Button'
    // no funcionara porque esta es una etiqueta de react material
    // para buscar con la etiqueta de React usar find(EtiquetaReact)
    const listItemButton = wrapper.find(ListItemButton);
    const clickFunc=listItemButton.prop('onClick');
    clickFunc();
    expect(handleToggle).toHaveBeenCalled();
  });

  it('Should show the content in listItem',() => {
    const listItem = wrapper.find(ListItemText);
    expect(listItem.text()).toBe(`1.${newToDo.desc}`);
    expect(listItem.prop('sx')).toEqual({});
    expect(listItem.text()).toContain('1');
  });

});