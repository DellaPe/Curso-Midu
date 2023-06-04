import { useState, useEffect } from 'react'
import { getImgSay } from '../services/factCatSay'

const useGetImgSay = ({ fact }) => {
  const [imgCat, setImgCat] = useState()
  useEffect(() => {
    getImgSay(fact).then(setImgCat)
  }, [fact])
  return { imgCat }
} // { imagUrl: 'https://...' }

export default useGetImgSay
