import { TodoText } from '../../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ text } : TodoText) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>
        todos
        <img
          style={{ width: '60px', height: 'auto' }}
          src='//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png'
        />
      </h1>

      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}
