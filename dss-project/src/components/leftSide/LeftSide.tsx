import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { useState } from 'react'
import type { User } from '../../types/User' 

export function LeftSide(props: {todoList: Todo[], toggleTodo, userList: User[] , leftFilter,setLeftFilter}) {
    const [leftSort,setLeftSort] = useState<string>("asc")
    const [shownCount,setShownCount] = useState<number>(10)
    let visibleTodos : Todo[] = props.todoList

    let userIds : number[] = []

    for(const todo of props.todoList) {
        if(userIds.includes(todo.userId)) continue
        else userIds.push(todo.userId)
    }
    
    const options = []
    for(let user of props.userList) {
        options.push(<option value={user.id.toString()}>{user.username}</option>)
    }
    if(leftSort == "asc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t1.title.localeCompare(t2.title))
    } else if(leftSort== "desc") {
        visibleTodos = [...visibleTodos].sort((t1,t2) => t2.title.localeCompare(t1.title))
    }

    let pagedTodos = visibleTodos.slice(0,shownCount)

    const handlePagiation = () => {
        setShownCount(prev => prev + 10)
    }

    return (
        
        <div className={styles.leftSide}>
            <div>
            <label>Filter by: </label>
            <select value={props.leftFilter} onChange={e => props.setLeftFilter(e.target.value)}>
                <option value={"all"}>All</option>
                {options}

            </select>
            <label>Sort by: </label>
            <select value={leftSort} onChange={e => setLeftSort(e.target.value)}>
                <option value={"asc"}>Title(asc)</option>
                <option value={"desc"}>Title(desc)</option>
            </select>
            </div>
            <div className={styles.todoLeftSide}>
            <h1>Pending:</h1>
                {pagedTodos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>)}
            
            {shownCount < visibleTodos.length && <button className={styles.loadMoreButton} onClick={() => handlePagiation()}>Load More</button>}
        </div>
        </div>
    )
}