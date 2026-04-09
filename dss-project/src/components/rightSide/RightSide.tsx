import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'

export function RightSide(props: {todoList: Todo[]} ) {



    return(<div className={styles.rightSide}>
        <h1>Completed Todso</h1>
        <ul>
            {props.todoList.map(todo => <li>ID:{ todo.id } Title: { todo.title } Completed: {todo.completed} </li>)}
        </ul>
    </div>)
}