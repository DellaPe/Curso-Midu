import Form from 'react-bootstrap/Form'
import { SOPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../constants'
import { type FC } from 'react'
import { type FromLanguage, type Language, SectionType } from '../types.d'

type Props =
  | { type: SectionType.FROM, value: FromLanguage, onChange: (Language: FromLanguage) => void }
  | { type: SectionType.TO, value: Language, onChange: (Language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
      {type === SectionType.FROM && <option value={DEFAULT_LANGUAGE}>Detectar idioma</option>}
      {
        // Como SOPPORTED_LANGUAGES es un objeto, no podemos usar map, por lo que usamos Object.entries
        Object.entries(SOPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key}>
            {literal}
          </option>
        ))
      }
    </Form.Select>
  )
}
