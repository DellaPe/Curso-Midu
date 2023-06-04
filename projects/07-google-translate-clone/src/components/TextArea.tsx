import { Form } from 'react-bootstrap'
import { type FC } from 'react'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

export const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {
  const commonStyles = { height: '200px' }

  const getPlaceHolder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.FROM) return 'Escribe texto a tradicir'
    if (loading === true) return 'Cargando...'
    return 'Traducción'
  }

  const handleChage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value)
    onChange(event.target.value)
  }
  const style = type === SectionType.FROM ? { ...commonStyles, border: 0 } : { ...commonStyles, backgroundColor: '#f5f5f5' }
  return (
    <Form.Control
      as='textarea'
      disabled={type === SectionType.TO}
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type === SectionType.FROM}
      style={style}
      value={value}
      onChange={handleChage}
    />
  )
}
