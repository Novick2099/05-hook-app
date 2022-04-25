import React, {useState} from 'react';
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import {Button} from "@material-ui/core";

//todo renderizar componente de manera condicional
// previene error de que el componenete ya fue desmontado y la tarea asincrona aun continua
// cancelar subscripciones si el componente no esta montado
const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>Real Example Hook</h2>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <Button id={"showButton"} onClick={()=>{setShow(!show);}}>
                Show / Hide
            </Button>

        </div>
    );
};

export default RealExampleRef;
