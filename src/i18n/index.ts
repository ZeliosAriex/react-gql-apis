import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import englishTranslations from './en.json'
import spanishTranslations from './es.json'
import { LS_LANG_KEY } from '../util/constants'

// Cargamos las traducciones que se encuentran en los JSON
const resources = {
  en: { translation: englishTranslations },
  es: { translation: spanishTranslations },
}

const lang = localStorage.getItem(LS_LANG_KEY) || 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
