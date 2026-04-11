import type { Todo } from "../../types/Todo";
export function TodoItem(props: {todo: Todo, toggleTodo}) {

    const buttonText : string = props.todo.completed ? "Undo" : "Complete"

    return (
        <div className="TodoItem">
            <p>{ props.todo.title }</p>
            <button onClick={() => props.toggleTodo(props.todo.id)}> {buttonText} </button>
            {props.todo.completed && <p>Completed on: {props.todo.completedAt}</p>}
        </div>
    )
}