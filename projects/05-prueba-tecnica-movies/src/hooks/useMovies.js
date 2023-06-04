import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../Services/movies'

export const useMovies = ({ value, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousValue = useRef(value)

  // const getMovies = useMemo(() => {
  //   return async ({ value }) => {
  //     if (value === previousValue.current) return
  //     try {
  //       setLoading(true)
  //       setError(null)
  //       previousValue.current = value
  //       const newMovies = await searchMovies({ value })
  //       setMovies(newMovies)
  //     } catch (e) {
  //       setError(e.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [])

  const getMovies = useCallback(async ({ value }) => {
    if (value === previousValue.current) return
    try {
      setLoading(true)
      setError(null)
      previousValue.current = value
      const newMovies = await searchMovies({ value })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [movies, sort])
  return { movies: sortedMovies, getMovies, loading }
}
