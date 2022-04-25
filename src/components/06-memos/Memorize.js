import React, {useState} from 'react';
import {useCounter} from "../../hooks/useCounter";
import {Button} from "@material-ui/core";
import SmallComponent from "./SmallSection";


const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);



    return (
        <div>
            <h1>Memorize Counter: <SmallComponent value={counter}/> </h1>
            <hr/>

            <Button variant="contained" onClick={increment}>
                +1
            </Button>
            <Button variant="contained" onClick={()=>{setShow(!show)}} >
                Show / Hide {JSON.stringify(show)}
            </Button>

        </div>
    );
};

export default Memorize;
