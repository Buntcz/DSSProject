import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'
import { TodoItem } from '../TodoItem/TodoItem'

export function RightSide(props: {todoList: Todo[], toggleTodo} ) {



    return(<div className={styles.rightSide}>
        <h1>Completed Todos</h1>
        <ul>
            {props.todoList.map(todo => <TodoItem todo={todo} toggleTodo={props.toggleTodo}/>)}
        </ul>
    </div>)
}