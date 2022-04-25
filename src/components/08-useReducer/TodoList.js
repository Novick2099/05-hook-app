import React from 'react';
import List from "@material-ui/core/List";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, handleDelete, handleToggle}) => {

  return (
    <List>
      {todos.map( (todo, i) => (
        <TodoListItem
          key={todo.id}
          todo ={todo}
          index = {i}
          handleDelete = {handleDelete}
          handleToggle = {handleToggle}
        >

        </TodoListItem>

      ) )}
    </List>
  );
};

export default TodoList;
