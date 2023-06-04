import { useState, useEffect } from 'react'
import { getFact } from '../services/factCatSay'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
export default useCatFact
