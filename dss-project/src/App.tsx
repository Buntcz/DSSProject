import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { LeftSide } from './components/leftSide/LeftSide'
import { RightSide } from './components/rightSide/RightSide'
import type { Todo } from './types/Todo'

function App() {
  const [todos,setTodos] = useState<Todo[]>([])

  async function fetchTodos() {
    try {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    setTodos(data)
  } catch(error) {
    console.error("Error fetching data.")
  }
}

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleComplete = (todoId: number) => {
    const flippedArray = todos.map((todo) => {
      if (todo.id === todoId) {
      const newTodo : Todo = {
        id: todo.id,
        userId: todo.userId,
        title: todo.title,
        completed: !todo.completed
      }
      return newTodo
      } else {
        return todo
      }
    })
    setTodos(flippedArray)
  }

  const completedTodos : Todo[] = todos.filter(todo => todo.completed == true)
  const uncompletedTodos : Todo[]  = todos.filter(todo => todo.completed == false)
  
  return (<div className={styles.appContainer}>
    <LeftSide todoList={uncompletedTodos} toggleTodo={toggleComplete}/>
    <RightSide todoList={completedTodos} toggleTodo={toggleComplete}/>
  </div>)
}

export default App
