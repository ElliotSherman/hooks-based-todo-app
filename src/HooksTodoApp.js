import React,{useState} from 'react';
import { Typography , Paper , AppBar , Toolbar , Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


export default function HooksTodoApp(props) {

    const intialTodos = [
        {id:1, task:'build project', completed: true},
        {id:2, task:'push project to github', completed: false},
        {id:3, task:'deploy project', completed: false}
    ];

    const [todos ,setTodos] = useState(intialTodos);
    const addNewTodo = newTodoText => {
        setTodos([...todos, {id:4, task:newTodoText , completed:false}]);
    };
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
            <Grid container justifyContent='center' style={{marginTop:'1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addNewTodo={addNewTodo}/>
                    <TodoList todos={todos} />
                </Grid>
            </Grid>
            
        </Paper>
    );
};


// STRUCTURE of downward data flow
// -TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem