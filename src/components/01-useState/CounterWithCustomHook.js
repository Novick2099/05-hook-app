import { Button, Typography } from '@material-ui/core'
import React from 'react'

import { useCounter } from '../../hooks/useCounter';

import './counter.css';

//functional component
export const CounterWithCustomHook = () => {
    // Custom hook useCounter
    const {state,increment,decrement,onReset} = useCounter(100);
    return (
        <>
          <Typography variant="h3">Counter With Hook: {state}</Typography>
          <hr/>
          {/*todo Pasar parametro a la referencia de una funcion envolviendola en funcion flecha */ }
          <Button variant="contained" color = "primary" onClick={()=>increment(2)}> +1 </Button>
          <Button variant="container" color="warning" onClick={onReset}>Reset</Button>
          <Button variant="contained" color = "secondary" onClick={()=>decrement(2)}> -1 </Button>
        </>
    )
}
