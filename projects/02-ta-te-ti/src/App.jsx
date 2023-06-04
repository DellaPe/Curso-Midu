import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { resetLocalStorage, saveLocalStorage } from './storage'
import WinnerModal from './components/WinnerModal.jsx'
import Board from './components/Board'
import Turn from './components/Turn'

function App () {
  // Tablero estado inicial
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  // Turno estado inicial
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })
  // null = no hay ganador - flase = empate - true = ganador
  const [winner, setWinner] = useState(null)
  // Reiniciar juego
  const resetGame = () => {
    const newBoard = Array(9).fill(null)
    setWinner(null)
    setBoard(newBoard)
    setTurn(TURNS.x)
    resetLocalStorage()
  }
  // Update tablero
  const updateBoard = (index) => {
    // Si tiene algo, no se puede
    if (board[index] || winner) return
    // Actualización del tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Actualización del turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // Guardar partida
    saveLocalStorage({ newBoard, newTurn })
    // Hay ganador?
    const winnerCheck = checkWinner(newBoard)
    if (winnerCheck) {
      confetti()
      setWinner(winnerCheck)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>TA TE TI</h1>
      <button onClick={resetGame} className='reset'>
        <h2>Empezar otra vez</h2>
      </button>

      <Board board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
