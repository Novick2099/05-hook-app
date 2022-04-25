import React from 'react';
import {Button} from "@material-ui/core";

//todo usar memo en combinacion con useCallback para evitar que el hijo se re-renderice
const ShowIncrement = React.memo(({increment}) => {

    console.log("me volvi a generar :( ");

    return (
        <Button variant="outlined" onClick={()=>{
            increment(5);
        }}>
            Incrementar
        </Button>
    );
}
);

export default ShowIncrement;
