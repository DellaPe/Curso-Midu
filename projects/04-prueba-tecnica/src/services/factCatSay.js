import axios from 'axios'
const URL_CAT_FACT = 'https://catfact.ninja/fact'
const URL_CAT_FACT_SAY = 'https://cataas.com/cat/says/'
// Obtiene la cadena conpleta de la api
export const getFact = async () => {
  try {
    const { data } = await axios.get(URL_CAT_FACT)
    const { fact } = data
    return fact
  } catch (error) {
    console.error('Error en obtener cata-fact!', error)
  }
}
// Obtiene la imagen con las primeras palabras
export const getImgSay = async (fact) => {
  if (!fact) return
  try {
    const firstsWords = fact.split(' ', 3).join(' ')
    const { data: data2 } = await axios.get(URL_CAT_FACT_SAY + `${firstsWords}?json=true`)
    return data2.url
  } catch (error) {
    console.error('Error en obtener cat-img!', error)
  }
}

// Usando fetch //
// fetch(URL_CAT_FACT)
//   .then(response => response.json())
//   .then(data => {
//     const { fact } = data
//     setFact(fact)
//     const firstsWords = fact.split(' ', 3).join(' ')
//     setTextSub(firstsWords)
//     console.log(`${URL_CAT_FACT_SAY}${firstsWords}?json=true`)
//     fetch(`${URL_CAT_FACT_SAY}${firstsWords}?json=true`)
//       .then(res => res.json())
//       .then(data => {
//         setImgCat(data.url)
//       })
//   })
