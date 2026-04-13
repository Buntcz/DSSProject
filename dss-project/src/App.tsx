import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { LeftSide } from './components/leftSide/LeftSide'
import { RightSide } from './components/rightSide/RightSide'
import type { Todo } from './types/Todo'
import type { User } from './types/User'

function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  const [users, setUsers] = useState<User[]>([])
  async function fetchTodos() {
    try {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    const today = new Date().toISOString().slice(0,10)
    const todosWithDate = data.map(todo => ({...todo, completedAt: todo.completed ? today : ""}))
    setTodos(todosWithDate)
  } catch(error) {
    console.error("Error fetching data.")
  }
}

async function fetchUsers() {
  try {
  const response = await fetch("http://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  const usersToUse = data.map(user => ({id: user.id, username: user.username}))
  setUsers(usersToUse)
} catch(error) {
  console.error("Error fetching users")
} 
} 

  useEffect(() => {
    fetchTodos();
    fetchUsers();
  }, []);

  const toggleComplete = (todoId: number) => {
    const flippedArray = todos.map((todo) => {
      if (todo.id === todoId) {
      const willBeComp = !todo.completed
      const completedOn = willBeComp ? new Date().toISOString().slice(0,10) : ""
      const newTodo : Todo = {
        id: todo.id,
        userId: todo.userId,
        title: todo.title,
        completed: !todo.completed,
        completedAt: completedOn
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
    <LeftSide todoList={uncompletedTodos} toggleTodo={toggleComplete} userList={users}/>
    <RightSide todoList={completedTodos} toggleTodo={toggleComplete}/>
  </div>)
}

export default App
