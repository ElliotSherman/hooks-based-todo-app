import React,{useState} from 'react';
import { Typography , Paper , AppBar , Toolbar , Grid } from '@mui/material';
import TodoList from './TodoList';


export default function HooksTodoApp(props) {
    const intialTodos = [
        {id:1, task:'build project', completed: true},
        {id:2, task:'push project to github', completed: false},
        {id:3, task:'deploy project', completed: false}
    ];

    const [todos ,setTodos] = useState(intialTodos);

    return (
        <Paper style ={{
            padding:0,
            margin:0,
            height: '100vh',
            backgroundColor:'#fafafa'
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:'64px'}}>
                <Toolbar>
                    <Typography color='inherit'> TodoApp  w/HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos} />
        </Paper>
    );
};


// STRUCTURE of downward data flow
// -TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem