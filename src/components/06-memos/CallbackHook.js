import React, {useCallback, useEffect, useState} from 'react';
import ShowIncrement from "./showIncrement";


//todo 1 Al Mandar una funcion actualizadora a un componente hijo, este se re-renderizara cada que use la funcion actualizadora
// no se puede usar use memo o memo, porque porque la funcion es una constante, cada que se re-renderiza el hijo se vuelve a crear
// por lo tanto es una funcion diferente, useCallback guarda la referencia de la funcion para que siempre sea la misma,
// en este caso se usa en el padre
const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = ()=>{
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((num)=>{
        //usa el estado anterior en el state con la funcion flecha para eliminar la dependencia del counter del setCounter
        setCounter(c => c + num)
    }, [setCounter]);
    //todo 2 Cuando se tiene un efecto y la dependencia del efecto es una funcion para evitar que el efecto se dispare
    // cada vez que se vuelva a construir la funcion (caso del useReducer cuando se renderiza infinito)
    // useEffect(()=>{
    // do something
    // },[increment]);

    return (
        <div>
            <h1>CallbackHook: {counter}</h1>
            <hr/>
            <ShowIncrement increment = {increment} />

        </div>
    );
};

export default CallbackHook;
