import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { LeftSide } from './components/leftSide/LeftSide'
import { RightSide } from './components/rightSide/RightSide'
import type { Todo } from './types/Todo'

function App() {
  const [todos,setTodos] = useState<Todo[]>()

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

  let completedTodos = todos.filter(todo => todo.completed == true)
  let uncompletedTodos = todos.filter(todo => todo.completed == false)
  
  return (<div className={styles.appContainer}>
    <LeftSide todos={completedTodos} />
    <RightSide todos={uncompletedTodos}/>
  </div>)
}

export default App
