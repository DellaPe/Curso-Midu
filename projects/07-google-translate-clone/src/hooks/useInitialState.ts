import { useReducer } from 'react'
import { type Action, type State, type Language, type FromLanguage, TYPES } from '../types.d'
import { DEFAULT_LANGUAGE } from '../constants'
const { INTERCHANGE_LANGUAGES, SET_FROM_LANGUAGE, SET_FROM_TEXT, SET_TO_LANGUAGE, SET_RETURN_TEXT, SET_LOADING } = TYPES

// 1: Crear initialState
const initialState: State = {
  fromLanguage: 'auto',
  fromText: '',
  toLanguage: 'en',
  returnText: '',
  loading: false
}

// 2: Crear reducer
function reducer (state: State, action: Action) {
  const { type } = action
  switch (type) {
    case INTERCHANGE_LANGUAGES:
      if (state.fromLanguage === DEFAULT_LANGUAGE) return state // Para que no se intercambien los lenguajes si el de origen es auto
      return { ...state, fromLanguage: state.toLanguage, toLanguage: state.fromLanguage }
    case SET_FROM_LANGUAGE:
      if (state.fromLanguage === action.payload) return state
      return { ...state, fromLanguage: action.payload, returnText: '', loading: state.fromText !== '' }
    case SET_FROM_TEXT:
      return { ...state, fromText: action.payload, loading: true, returnText: '' }
    case SET_TO_LANGUAGE:
      return { ...state, toLanguage: action.payload }
    case SET_RETURN_TEXT:
      return { ...state, returnText: action.payload, loading: false }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export function useInitialState () {
  // 3: Crear useReducer
  const [{ fromLanguage, fromText, toLanguage, returnText, loading }, dispatch] = useReducer(reducer, initialState)
  // No exportar dispatch directamente para poder cambiar la logica de los reducers sin que afecte a los componentes
  const interchangeLanguages = () => { dispatch({ type: INTERCHANGE_LANGUAGES }) }
  const setFromLanguage = (payload: FromLanguage) => { dispatch({ type: SET_FROM_LANGUAGE, payload }) }
  const setFromText = (payload: string) => { dispatch({ type: SET_FROM_TEXT, payload }) }
  const setToLanguage = (payload: Language) => { dispatch({ type: SET_TO_LANGUAGE, payload }) }
  const setReturnText = (payload: string) => { dispatch({ type: SET_RETURN_TEXT, payload }) }
  const setLoading = (payload: boolean) => { dispatch({ type: SET_LOADING, payload }) }

  return {
    fromLanguage,
    fromText,
    toLanguage,
    returnText,
    loading,
    // Dispatchers
    interchangeLanguages,
    setFromLanguage,
    setFromText,
    setToLanguage,
    setReturnText,
    setLoading
  }
}
