import type { Todo } from "../../types/Todo";
import styles from "./TodoItem.module.css"

export function TodoItem(props: {todo: Todo, toggleTodo}) {

    const buttonText : string = props.todo.completed ? "Undo" : "Complete"

    return (
        <div className={styles.todoItem}>
            <p>{ props.todo.title }</p>
            <button className={styles.todoButton} onClick={() => props.toggleTodo(props.todo.id)}> {buttonText} </button>
            {props.todo.completed && <p>Completed on: {props.todo.completedAt}</p>}
        </div>
    )
}