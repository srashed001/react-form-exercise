const Todo = ({id, task, removeTodo}) => {
    return (
        <div data-testid = 'todo'>
            <span>Task: {task}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo