import { Link } from '@reach/router'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import { DarkModeContext } from '../../contexts/darkMode'
import DefaultLayout from '../_layouts/Default'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage = (props: PageBaseProps): JSX.Element => {
  const { t } = useTranslation()
  const { toggleDarkMode } = useContext(DarkModeContext)

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  const handleSwitchLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <DefaultLayout>
      <Title>{t('pages.home.title')}</Title>
      <button type='button' onClick={handleToggleDarkMode}>
        Dark Mode!
      </button>
      <button type='button' onClick={() => handleSwitchLang('es')}>
        Español
      </button>
      <button type='button' onClick={() => handleSwitchLang('en')}>
        English
      </button>
      <Link to='/anime'>Go to anime directory</Link>
    </DefaultLayout>
  )
}

export default HomePage
