import { Paper , List , Divider , ListItem, ListItemText } from '@mui/material';
import React from 'react';

function TodoList(props) {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <>
                <ListItem>
                    <ListItemText>{todo.task}</ListItemText>
                </ListItem>
                <Divider/>
                </>
            ))}
            </List>
        </Paper>
    );
}

export default TodoList;