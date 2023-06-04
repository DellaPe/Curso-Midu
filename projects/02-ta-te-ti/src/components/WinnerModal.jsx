import Square from './Square'

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Ganó: '
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='winner-header'>
          {
            winner && <Square>{winner}</Square>
          }
        </header>

        <footer>
          <button onClick={resetGame} className='reset'>
            <h2>Empezar otra vez</h2>
          </button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
