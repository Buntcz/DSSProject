import { useState } from 'react'
import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'
import { TodoItem } from '../TodoItem/TodoItem'

export function RightSide(props: {todoList: Todo[], toggleTodo} ) {
    const [rightSort,setRightSort] = useState<string>("asc")
    const [showCount, setShowCount] = useState<number>(10)
    let visibleTodos : Todo[] = props.todoList

    if(rightSort === "asc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t1.completedAt.localeCompare(t2.completedAt))
    } else if(rightSort === "desc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t2.completedAt.localeCompare(t1.completedAt))
    }

    let pagedTodos = visibleTodos.slice(0,showCount)

    const handlePagiation = () => {
        setShowCount(prev => prev + 10)
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
            {pagedTodos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>)}

            {showCount < visibleTodos.length && <button className={styles.loadMoreButton} onClick={() => handlePagiation()}>Load More</button>}
        </div>
    </div>)
}