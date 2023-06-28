import { useState } from 'react'
import { Todos } from './components/Todos'
import './index.css'
import { TodoId, TodoText } from '../types'
import { FilterValues, TODO_FILTERS } from './constants'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  { id: '1', text: 'Todo 1', completed: false },
  { id: '2', text: 'Todo 2', completed: true },
  { id: '3', text: 'Todo 3', completed: false }
]

const App = () : JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filtersSelected, setFiltersSelected] = useState<FilterValues>(TODO_FILTERS.ALL)

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filterTodos = todos.filter(todo => {
    if (filtersSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filtersSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todos
  })

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValues): void => {
    setFiltersSelected(filter)
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

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ text }: TodoText): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos
        todos={filterTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />

      <Footer
        onClearCompleted={handleClearCompleted}
        activeCount={activeCount}
        completedCount={completedCount}
        filtersSelected={filtersSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
