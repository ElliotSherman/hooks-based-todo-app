import React from 'react';
import { ListItemText ,Checkbox , ListItemSecondaryAction, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
function Todo({task , completed}) {
    return (
            <>
                <Checkbox checked={completed} tabIndex={-1}/>
                <ListItemText style={{textDecoration: completed? 'line-through' : 'none'}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='delete'>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EditIcon aria-label='edit'/>
                    </IconButton>
                </ListItemSecondaryAction>
            </>
    );
}

export default Todo;