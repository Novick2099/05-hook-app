import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const TodoListItem = ({key, todo, index, handleDelete, handleToggle}) => {

  const onClickToggle=()=>{
    handleToggle(todo.id)
  }

  return (
    <ListItem secondaryAction={
      <IconButton id={`delete_button_${index}`} edge="end" aria-label="delete" onClick={()=>{
        handleDelete(todo.id);
      }}>
        <DeleteIcon />
      </IconButton>}
    >
      <ListItemButton
        id={`TodoToggleButton${todo.id}}`}
        key={`TodoToggleButton${todo.id}}`}
        onClick={onClickToggle}>
        <ListItemText
          key={`TodoTextItem${todo.id}}`}
          primary={`${index+1}.${todo.desc}`}
          // todo preferir usar operadores ternarios a condition && value
          sx={todo.done ? {textDecoration: 'line-through'}:{}}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
