import { Paper, TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState'

// function TodoForm(props) {
function TodoForm({addNewTodo}) {
    const [value , handeleChange , reset ] = useInputState('');

    return (
        <Paper style={{margin:'1rem 0', padding:'0 1rem'}}>
            <form onSubmit={e =>{
                e.preventDefault();
                addNewTodo(value);
                reset();
            }}
        >
                <TextField 
                value={value} 
                onChange={handeleChange} 
                margin='normal'
                fullWidth
                label="Add New Todo"
                type="text"
                variant="standard"/>
            </form>
        </Paper>
    );
}

export default TodoForm;