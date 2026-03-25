import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18n'
import './index.css'
import App from './App.jsx'

const params = new URLSearchParams(window.location.search)
const lang = params.get('lang') || 'en'
const initialLang = lang === 'fr' ? 'fr' : 'en'

if (i18n.language !== initialLang) {
  i18n.changeLanguage(initialLang)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
