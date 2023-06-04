import Square from './Square'

const Board = ({ board, updateBoard }) => {
  return (
    <section className='board game'>
      {
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
