const MouseCircle = ({ enabled, possMouse }) => {
  if (!enabled) return
  return (
    <div
      className='circle-mouse'
      style={{ transform: `translate(${possMouse.x}px, ${possMouse.y}px)` }}
    />
  )
}

export default MouseCircle
