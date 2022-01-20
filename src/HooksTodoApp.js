import React,{useState} from 'react';
import { Typography , Paper , AppBar , Toolbar , Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

export default function HooksTodoApp(props) {

    const intialTodos = [
        {id:1, task:'build project', completed: true},
        {id:2, task:'push project to github', completed: false},
        {id:3, task:'deploy project', completed: false}
    ];

    const [todos ,setTodos] = useState(intialTodos);

    // add todo function
    const addNewTodo = newTodoText => {
        setTodos([...todos, {id:uuidv4(), task:newTodoText , completed:false}]);
    };
    // remove todo function
    const removeTodo =(todoId) =>{
        // filter out todo by id 
        const updatedTodoList = todos.filter(todo => todo.id !== todoId);
        // call setTodos with new todos Array 
        setTodos(updatedTodoList);
    };
    // toggle completed todo checkbox funcion
    const toggleCheckbox = todoId => {
        const updatedTodoList = todos.map( todo => 
            todo.id === todoId ? {...todo , completed: !todo.completed } : todo 
        );
        setTodos(updatedTodoList);
    };
    const editTodo = (todoId , newTask) => {
        const updatedTodoList = todos.map( todo => 
            todo.id === todoId ? {...todo , task: newTask } : todo 
        );
        setTodos(updatedTodoList);
    }
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


// STRUCTURE of downward data flow
// -TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem