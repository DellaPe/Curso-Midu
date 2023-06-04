import Square from './Square'

// eslint-disable-next-line react/prop-types
const Board = ({ board, updateBoard }) => {
  return (
    <section className='board game'>
      {
        // eslint-disable-next-line react/prop-types
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
    </section>
  )
}

export default Board
