import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useInitialState } from './hooks/useInitialState'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { DEFAULT_LANGUAGE } from './constants'
import { ArrorsIcon, ClipboardIcon, SpeakerIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App () {
  const {
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
  } = useInitialState()

  const debouncedFromText = useDebounce(fromText, 1000)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        console.log(result)
        if (result == null) return // 2 = porque detecta si es null o undefined
        setReturnText(result)
        setLoading(false)
      })
      .catch(() => { setReturnText('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClickBoard = () => {
    navigator.clipboard.writeText(returnText).catch(() => {})
  }

  const handleClickSpeaker = () => {
    const utterance = new SpeechSynthesisUtterance(returnText)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid className='App'>
      <h1>Google Translate</h1>

      <Row>
        <Col xs={5}>
          <LanguageSelector
            type={SectionType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
        </Col>

        <Col xs={2} className='mx-auto'>
          <Button variant='link' disabled={fromLanguage === DEFAULT_LANGUAGE} onClick={interchangeLanguages}>
            <ArrorsIcon />
          </Button>
        </Col>

        <Col xs={5}>
          <LanguageSelector
            type={SectionType.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <TextArea
            type={SectionType.FROM}
            loading={loading}
            value={fromText}
            onChange={setFromText}
          />
        </Col>
        <Col xs={6}>
          <div style={{ position: 'relative' }}>
            <TextArea
              type={SectionType.TO}
              loading={loading}
              value={returnText}
              onChange={setReturnText}
            />
            <div style={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.5, display: 'flex' }}>
              <Button variant='link' onClick={handleClickBoard}>
                <ClipboardIcon />
              </Button>
              <Button variant='link' onClick={handleClickSpeaker}>
                <SpeakerIcon />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
