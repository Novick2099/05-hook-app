import { Button, Typography } from "@material-ui/core";
import React,{useState} from "react";
import './counter.css';

export const CounterApp = () => {

    const [state,setState]=useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });
    // todo desestructuracion de objetos
    const {counter1, counter2, counter3} = state;

  return (
    <div>
        <Typography variant="h1">Contador1: {counter1}</Typography>
        <Typography variant="h2">Contador2: {counter2}</Typography>
        <Typography variant="h3">Contador3: {counter3}</Typography>
      <hr />
      <Button variant="contained" color="primary"
      onClick={()=>{
          setState({
              //operador spread
              ...state,
              counter1: counter1 + 1
        });
      }}>
        +1
      </Button>
    </div>
  );
};
