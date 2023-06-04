import './App.css'
import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'
import { useValue } from './hooks/useValue'

function App () {
  const [sort, setSort] = useState(false)
  const { value, setValue, error } = useValue()
  const { movies, getMovies, loading } = useMovies({ value, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(debounce(({ value }) => {
    getMovies({ value })
  }, 500)
  , [getMovies])
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ value })
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    debounceGetMovies({ value: newValue })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>BUSCADOR DE PELIS</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
              color: error ? 'red' : ''
            }}
            onChange={handleChange}
            value={value}
            type='text'
            placeholder='El secreto de sus ojos, Esperando la carroza...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
