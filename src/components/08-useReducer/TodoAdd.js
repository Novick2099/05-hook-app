import React from 'react';
import {Button, Input, Typography} from "@mui/material";
import {useForm} from "../../hooks/useForm";

const TodoAdd = ({handleAddTodo}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(description.trim().length <= 1){
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo,
    };
    handleAddTodo( action );
    reset();
  }

  return (
    <>
      <Typography variant="h3">Add Todo</Typography>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>

    </>
  );
};

export default TodoAdd;
