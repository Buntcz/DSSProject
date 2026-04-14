import type { Todo } from "../../types/Todo";
import styles from "./TodoItem.module.css"

export function TodoItem(props: {todo: Todo, toggleTodo}) {

    const buttonText : string = props.todo.completed ? "Undo" : "Complete"

    return (
        <div className={`${styles.todoItem} ${props.todo.completed ? styles.completed : ""}`}>
            <p className={styles.todoTitle} >{ props.todo.title }</p>
            <button className={styles.todoButton} onClick={() => props.toggleTodo(props.todo.id)}> {buttonText} </button>
            {props.todo.completed && <p className={styles.todoMeta}>Completed on: {props.todo.completedAt}</p>}
        </div>
    )
}