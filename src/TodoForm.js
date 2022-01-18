import { Paper, TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState'

// function TodoForm(props) {
function TodoForm({addNewTodo}) {
    const [value , handeleChange , reset ] = useInputState('');

    return (
        <Paper>
            <form onSubmit={e =>{
                e.preventDefault();
                addNewTodo(value);
                reset();
            }}
        >
                <TextField value={value} onChange={handeleChange}/>
            </form>
        </Paper>
    );
}

export default TodoForm;