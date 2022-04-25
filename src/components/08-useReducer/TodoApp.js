import React, {useEffect, useReducer} from 'react';
import {todoReducer} from "./todoReducer";
import { Grid, Typography } from "@mui/material";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = ()=>{
    return JSON.parse(localStorage.getItem('todosState')) || [];
}

const TodoApp = () => {

    // la desestructuracion de arreglos es posicional
    const [todosState, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todosState', JSON.stringify(todosState));
    }, [todosState]);

    const handleAddTodo = (newTodo) => {
        dispatch( {
            type: 'add',
            payload: newTodo,
        });
    }

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action);
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        });
    }

    return (
        <div>
            <Grid container item  spacing={5} xs={6} md={6}>
                <Grid item xs={8}>
                    <Typography variant="h2">To do List ({todosState.length})</Typography>
                    <nav aria-label="main mailGrid folders">
                        <TodoList
                          todos = {todosState}
                          handleDelete = {handleDelete}
                          handleToggle = {handleToggle}
                        />
                    </nav>
                </Grid>
                <Grid item xs={4}>
                    <TodoAdd
                      handleAddTodo = {handleAddTodo}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default TodoApp;
