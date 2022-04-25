const {renderHook, act} = require("@testing-library/react-hooks");
const {useCounter} = require("../../hooks/useCounter");


describe('Test in useCounter', ()=>{
  it('Debe de retornar valores por defecto', ()=>{
    const { result } = renderHook(()=>useCounter());
    expect( result.current.counter ).toBe(10);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.onReset ).toBe('function');
  });

  it('should increment the counter in one', ()=>{
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
// todo act sirve para ejecutar una funcion en un hook y espera a que se complete
    act(()=>{
      increment();
    });
    //las funciones dentro del hook se llaman por desestructuracion
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  it('should decrement correctly', ()=>{
    const { result } = renderHook(()=>useCounter(100));
    const { decrement, onReset } = result.current;
    //todo solo ejecuta funciones que muten el estado 1 sola vez decrement(); decrement(); solo aplicara la primera llamada
    act( () => {
      decrement();
      onReset();
    });
    console.log(result.current);
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

});

