import React from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

function TodoEditField({ id , task ,editTodo , toggleEdit}) {
    const [value , handeleChange , reset ] = useInputState(task)
    return (
        <form 
            onSubmit = {(e) => {
                e.preventDefault();
                editTodo( id , value );
                reset();
                toggleEdit();
            }}
            style={{marginLeft:'1rem', width:'50%'}}
        >
        <TextField 
        value={value}
        onChange={handeleChange} 
        margin='normal'
        fullWidth
        label="Editing Todo"
        type="text"
        variant="standard"
        fullWidth
        autoFocus
        />
        </form>
        
    );
}

export default TodoEditField;