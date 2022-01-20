import { Paper , List , Divider , ListItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Todo from './Todo';

function TodoList({todos, removeTodo , toggleCheckbox , editTodo}) {
    const list = todos.map((todo , i) => (
        <div key={todo.id}>
        <ListItem style={{height:'64px'}} >
            <Todo
                {...todo}
                removeTodo = {removeTodo}
                toggleCheckbox = {toggleCheckbox}
                editTodo = {editTodo}
                />
        </ListItem>
        {i< todos.length-1 && <Divider />}
        </div>
    ))
    return (
        <Paper>
            <List>
            {list}
            </List>
        </Paper>
    );
}

export default TodoList;