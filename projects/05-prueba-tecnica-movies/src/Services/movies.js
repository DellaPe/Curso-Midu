const API_KEY = import.meta.env.VITE_API_KEY

export const searchMovies = async ({ value }) => {
  if (value === '') return null
  try {
    const URL_PELI = `http://www.omdbapi.com/?apikey=${API_KEY}&S=${value}`
    const response = await fetch(URL_PELI)
    const json = await response.json()
    const movies = json.Search
    return movies.map(({ imdbID, Title, Year, Poster }) => ({
      id: imdbID,
      title: Title,
      year: Year,
      poster: Poster
    }))
  } catch (error) {
    console.error('ERROR!', error)
    return null
  }
}
