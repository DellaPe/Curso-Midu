import { type TodoId, type Todo as TodoType } from '../../types'

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void
  onToggleCompleted: (id: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, text, completed, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={() => { onToggleCompleted({ id }) }}
      />
      <label>{text}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}
      />
    </div>
  )
}
