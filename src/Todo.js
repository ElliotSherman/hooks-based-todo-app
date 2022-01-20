import React from 'react';
import { ListItemText ,Checkbox , ListItemSecondaryAction, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from './hooks/useToggle';
import TodoEditField from './TodoEditField';


function Todo({id , task , completed , removeTodo , toggleCheckbox ,editTodo}) {
    const [isEditing,toggleEdit] = useToggle(false);
    return (
            <>
                {isEditing ?( 
                    <TodoEditField 
                        task={task}
                        editTodo={editTodo}
                        id={id}
                        toggleEdit = {toggleEdit}
                    />
                ) : (
                <>
                <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleCheckbox(id)}/>
                
                <ListItemText style={{textDecoration: completed? 'line-through' : 'none'}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={()=> removeTodo(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggleEdit}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
                </>)
                }
            </>
    );
}

export default Todo;