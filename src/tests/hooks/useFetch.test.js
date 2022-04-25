import {renderHook} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/useFetch";

describe('Testing on useFetch',()=>{

  const initialState = {
    data: null,
    loading: true,
    error: null
  }

  it('Should render by default', ()=>{
    //todo para inicializar un hook, se pasan las propiedades que lo inicializan por props
    //de tal manera que el unit test solo trabaja con las funciones del hook
    const { result } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    console.log(result.current);

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  it('Should get the data from API, loading false, error false',async ()=>{
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate({timeout: 5000});
    const {data, loading, error} = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('Should get the data from API, loading false, error false',async ()=>{

    //TODO test API gets called with renderHook
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://breingbadapi.com/api/quotes/1'));
    await waitForNextUpdate({timeout: 5000});
    const {data, loading, error} = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('Can´t connect with API');
  });

});