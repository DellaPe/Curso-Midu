import { WINNER_POSS } from '../constants'
export const checkWinner = (boardToCheck) => {
  // Si hay un ganador
  for (const combo of WINNER_POSS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // No hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
