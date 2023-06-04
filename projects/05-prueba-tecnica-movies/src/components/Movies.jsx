import '../App.css'

export const ListMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(({ id, title, year, poster }) => (
          <li className='movie' key={id}>
            <h3>{title}</h3>
            <p>{year}</p>
            <img className='movie-img' src={poster} alt={title} />
          </li>
        ))
  }
    </ul>
  )
}

const NoMoives = () => {
  return (
    <p>No se encontraron películas para está búsqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <ListMovies movies={movies} /> : <NoMoives />
  )
}
