import 'react-i18next'
import esNamespace from './es.json'
import enNamespace from './en.json'

declare module 'react-i18next' {
  interface Resources {
    esNamespace: typeof esNamespace
    enNamespace: typeof enNamespace
  }
}
