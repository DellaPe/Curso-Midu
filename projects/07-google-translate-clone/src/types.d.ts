import type { SOPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants'

export type Language = keyof typeof SOPPORTED_LANGUAGES // Esto me cuando llame a algun setter, tengo que usar un key de SOPPORTED_LANGUAGES
export type AutoLength = typeof DEFAULT_LANGUAGE
export type FromLanguage = Language | AutoLength

export interface State {
  fromLanguage: FromLanguage
  fromText: string
  toLanguage: Language
  returnText: string
  loading: boolean
}

export enum TYPES {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_RETURN_TEXT = 'SET_RETURN_TEXT',
  SET_LOADING = 'SET_LOADING'
}

export type Action = // Esto me condiciona que en '2' tengo que usar action.payload
  | { type: TYPES.INTERCHANGE_LANGUAGES }
  | { type: TYPES.SET_FROM_LANGUAGE, payload: FromLanguage }
  | { type: TYPES.SET_FROM_TEXT, payload: string }
  | { type: TYPES.SET_TO_LANGUAGE, payload: Language }
  | { type: TYPES.SET_RETURN_TEXT, payload: string }
  | { type: TYPES.SET_LOADING, payload: boolean }

export enum SectionType {
  FROM = 'from',
  TO = 'to'
}
