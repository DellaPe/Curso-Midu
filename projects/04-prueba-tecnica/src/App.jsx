import './App.css'

import useGetImgSay from './hooks/UseGetImgSay'
import useCatFact from './hooks/UseCatFact'

const URL_CAT_PREFIX = 'https://cataas.com'
// `https://cataas.com/cat/says/${}?size=50&color=red`

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgCat } = useGetImgSay({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='main-cat'>
      <h1>App Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <h2> {fact} </h2>
      {imgCat && <img src={`${URL_CAT_PREFIX}${imgCat}`} alt='Cat imagen say' />}
    </main>
  )
}

export default App
