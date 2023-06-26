import { TodoId, type ListOfTodo } from '../../types'
import { Todo } from './Todo'

interface Props {
  onToggleCompleted: (id: TodoId) => void
  onRemoveTodo: (id: TodoId) => void
  todos: ListOfTodo
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
