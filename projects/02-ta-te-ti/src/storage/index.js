export const saveLocalStorage = ({ newBoard, newTurn }) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const resetLocalStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
