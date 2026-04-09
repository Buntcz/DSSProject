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

  const completedTodos = todos.filter(todo => todo.completed == true)
  const uncompletedTodos = todos.filter(todo => todo.completed == false)
  
  return (<div className={styles.appContainer}>
    <LeftSide todoList={uncompletedTodos}/>
    <RightSide todoList={completedTodos}/>
  </div>)
}

export default App
