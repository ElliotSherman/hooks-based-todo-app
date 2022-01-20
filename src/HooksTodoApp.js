import React from 'react';
import { Typography , Paper , AppBar , Toolbar , Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';


export default function HooksTodoApp() {
    const initialTodos = [{id:1,task:'this is an initial test value', completed:false}];
    const {todos ,addTodo, removeTodo ,toggleCheckbox , editTodo} = useTodoState(initialTodos);
    


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
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                    todos={todos} 
                    removeTodo={removeTodo} 
                    toggleCheckbox={toggleCheckbox}
                    editTodo = {editTodo}
                    />
                </Grid>
            </Grid>
            
        </Paper>
    );
};
