import { Paper , List , Divider , ListItem } from '@mui/material';
import React from 'react';
import Todo from './Todo';

function TodoList({todos, removeTodo}) {
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                <ListItem>
                    <Todo
                        id = {todo.id} 
                        task ={todo.task} 
                        key={todo.id} 
                        completed={todo.completed}
                        removeTodo = {removeTodo}
                        />
                </ListItem>
                <Divider/>
                </>
            ))}
            </List>
        </Paper>
    );
}

export default TodoList;