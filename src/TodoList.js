import { Paper , List , Divider , ListItem } from '@mui/material';
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <>
                <ListItem>
                    <Todo task ={todo.task} key={todo.id} completed={todo.completed}/>
                </ListItem>
                <Divider/>
                </>
            ))}
            </List>
        </Paper>
    );
}

export default TodoList;