import { useState } from 'react'
import { Todos } from './components/Todos'
import './index.css'
import { TodoId } from '../types'

const mockTodos = [
  { id: '1', text: 'Todo 1', completed: false },
  { id: '2', text: 'Todo 2', completed: true },
  { id: '3', text: 'Todo 3', completed: false }
]

const App = () : JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id }: TodoId): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />
    </div>
  )
}

export default App
