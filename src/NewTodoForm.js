import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const [task, setTask] = useState("")
    
    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(task !== ''){
            addTodo(task)
            setTask("")
        } 
    }

    return (
        <>
        <h1>Create Todo</h1>
        <form data-testid="newTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="todo">Create Todo:</label>
            <input
                name="todo"
                id="todo" 
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
        </>
    )

}

export default NewTodoForm