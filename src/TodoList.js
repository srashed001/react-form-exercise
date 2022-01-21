import { useState } from "react";
import {v4 as uuid} from 'uuid';

import Todo from "./Todo";
import NewToDoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);


    const addTodo = (task) => {
        setTodos(todos => [...todos, {id: uuid(), task }])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <>
        <div>
            <NewToDoForm addTodo={addTodo}  />
        </div>
        <div>
            {todos.map(todo => <Todo key={todo.id} task={todo.task} removeTodo={removeTodo} id={todo.id} />)}
        </div>
        </>
    )


}

export default TodoList