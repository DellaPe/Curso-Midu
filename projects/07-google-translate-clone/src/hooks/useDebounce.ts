import { useState, useEffect } from 'react'

export function useDebounce<T> (value: T, delay = 500) {
  const [debounce, setDebounce] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => { setDebounce(value) }, delay)
    return () => { clearTimeout(timer) }
  }, [value, delay])
  return debounce
}
