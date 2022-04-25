import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";

describe('Testing useForm',()=>{

  const initialForm = {
    name: 'Carlos',
    email: 'carlos@gmail.com'
  };

  test('should return a form by default', ()=>{
    //todo se llama result debido a la libreria renderHook
    const { result } = renderHook(()=>useForm(initialForm));
    const [ values, handleInputChange, reset ] = result.current;
    expect( values ).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change name value from form',()=>{
    const { result } = renderHook(()=>useForm(initialForm));
    //todo desestructuracion de arreglos funciona por posiciones
    const [ , handleInputChange ] = result.current;
    act(()=>{
      //se simula el evento que se dispara cuando se modifica un input
      handleInputChange({target: {name: 'name', value: 'Melisa'}});
    });
    const [values] = result.current;
    expect(values.name).toBe('Melisa');
    //fancy =P se asegura que las demas propiedades no cambiaron
    expect(values).toEqual({...initialForm, name: 'Melisa'});

  });

  test('should reset the values in the form',()=>{
    const { result } = renderHook(()=>useForm(initialForm));
    const [ values, handleInputChange, reset ] = result.current;
    act(()=>{
      handleInputChange({target: {name: 'name', value: 'Melisa'}});
      reset();
    });
    expect(values).toEqual(initialForm);
  });


});