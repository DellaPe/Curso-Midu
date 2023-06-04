import { useState, useEffect, useRef } from 'react'

export const useValue = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = value === ''
      return
    }

    if (value.startsWith(' ')) return

    if (value === '') {
      return setError('No se puede buscar una película vacía!')
    }

    if (value.length < 1) {
      return setError('No se puede buscar una película con menos de 2 caracteres')
    }

    setError(null)
  }, [value])
  return { value, setValue, error }
}
