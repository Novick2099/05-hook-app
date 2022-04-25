import React, {useMemo, useState} from 'react';
import {useCounter} from "../../hooks/useCounter";
import {Button} from "@material-ui/core";
import {procesoPesado} from "../../helpers/procesoPesado";


const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);




    const procesoPesadoMemorizado = useMemo(()=>procesoPesado(counter),[counter]);

    return (
        <div>
            <h1>Memorize Hook</h1>
            <h2>Counter: <small> {counter} </small></h2>
            <hr/>
            <p>{procesoPesadoMemorizado}</p>
            <Button variant="contained" onClick={increment}>
                +1
            </Button>
            <Button variant="contained" onClick={()=>{setShow(!show)}} >
                Show / Hide {JSON.stringify(show)}
            </Button>

        </div>
    );
};

export default MemoHook;