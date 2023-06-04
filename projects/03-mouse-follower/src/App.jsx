import './App.css'
import { useEffect, useState } from 'react'
import MouseCircle from './components/MouseCircle.jsx'

function App () {
  const [enabled, setEnabled] = useState(false) // Para saber si esta activado el seguir
  const [possMouse, setPossMouse] = useState({ x: 0, y: 0 })

  useEffect(() => { // Solo se actualiza al cambiar enabled
    const handleMove = (event) => { // Devuelve la poss del mouse
      const { clientX, clientY } = event
      setPossMouse({ x: clientX, y: clientY })
    }

    if (enabled) { // Si esta acticado
      window.addEventListener('pointermove', handleMove)
    }

    return () => { // Siempre remover un evento
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const handleClick = () => { // Cambia el estado de seguir
    setEnabled(!enabled)
  }

  return (
    <main>
      <h1>Seguir Mouse</h1>
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
      <MouseCircle possMouse={possMouse} enabled={enabled} />
    </main>
  )
}

export default App
