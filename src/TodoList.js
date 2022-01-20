import { Paper , List , Divider , ListItem } from '@mui/material';
import React from 'react';
import Todo from './Todo';

function TodoList({todos, removeTodo , toggleCheckbox , editTodo}) {
    return (
        <Paper>
            <List>
            {todos.map((todo , i) => (
                <>
                <ListItem style={{height:'64px'}}>
                    <Todo
                        id = {todo.id} 
                        task ={todo.task} 
                        key={todo.id} 
                        completed={todo.completed}
                        removeTodo = {removeTodo}
                        toggleCheckbox = {toggleCheckbox}
                        editTodo = {editTodo}
                        />
                </ListItem>
                {i< todos.length-1 && <Divider/>}
                </>
            ))}
            </List>
        </Paper>
    );
}

export default TodoList;