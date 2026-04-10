import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'
import { TodoItem } from '../../components/TodoItem/TodoItem'

export function LeftSide(props: {todoList: Todo[], toggleTodo}) {
    return (
        <div className={styles.leftSide}>
            <h1>Uncompleted Todos:</h1>
            <ul>
                {props.todoList.map(todo => <TodoItem todo={todo} toggleTodo={props.toggleTodo}/>)}
            </ul>
        </div>
    )
}