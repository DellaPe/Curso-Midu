import { useState } from 'react'
import { TodoText } from '../../types'

interface Props {
  onAddTodo: ({ text }: TodoText) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo({ text })
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        placeholder='¿Qué necesitas hacer?'
        value={text}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}
