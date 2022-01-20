import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalstorageState from "./useLocalstorageState";

export default initialTodos => {
    const [todos ,setTodos] = useLocalstorageState('todos', initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
        setTodos([...todos, { id :uuidv4(), task:newTodoText , completed:false }]);
        },
        removeTodo : (todoId) =>{
            // filter out todo by id 
            const updatedTodoList = todos.filter(todo => todo.id !== todoId);
            // call setTodos with new todos Array 
            setTodos(updatedTodoList);
        },
        toggleCheckbox : todoId => {
            const updatedTodoList = todos.map( todo => 
                todo.id === todoId ? {...todo , completed: !todo.completed } : todo 
            );
            setTodos(updatedTodoList);
        },
        editTodo : (todoId , newTask) => {
            const updatedTodoList = todos.map( todo => 
                todo.id === todoId ? {...todo , task: newTask } : todo 
            );
            setTodos(updatedTodoList);
        }
    }
}
