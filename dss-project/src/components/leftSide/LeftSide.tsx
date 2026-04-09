import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'

export function LeftSide(props: {todoList: Todo[]}) {
    return (
        <div className={styles.leftSide}>
            <h1>Uncompleted Todos:</h1>
            <ul>
                {props.todoList.map(todo => <li>ID: {todo.id} Title: {todo.title} Completed: {todo.completed} </li>)}
            </ul>
        </div>
    )
}