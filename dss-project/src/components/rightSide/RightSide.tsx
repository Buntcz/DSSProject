import { useState } from 'react'
import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'
import { TodoItem } from '../TodoItem/TodoItem'

export function RightSide(props: {todoList: Todo[], toggleTodo} ) {
    const [rightSort,setRightSort] = useState<string>("asc")
    let visibleTodos : Todo[] = props.todoList

    if(rightSort === "asc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t1.completedAt.localeCompare(t2.completedAt))
    } else if(rightSort === "desc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t2.completedAt.localeCompare(t1.completedAt))
    }

    return(<div className={styles.rightSide}>
        <div>
         <label>Sort by: </label>
            <select value={rightSort} onChange={e => setRightSort(e.target.value)}>
                <option value={"asc"}>Date(asc)</option>
                <option value={"desc"}>Date(desc)</option>
            </select>
        </div>
        <div className={styles.todoRightSide}>
        <h1>Completed: </h1>
            {visibleTodos.map(todo => <TodoItem todo={todo} toggleTodo={props.toggleTodo}/>)}
        </div>
    </div>)
}