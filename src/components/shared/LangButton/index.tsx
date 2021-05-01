/** @jsxImportSource @emotion/react */
import React from 'react'
import { useTranslation } from 'react-i18next'
import IconButton from '../IconButton'
import { LangIcon } from '../../../assets/icons/smart/LangIcon'
import { LS_LANG_KEY } from '../../../util/constants'

const LangButton = () => {
  const { i18n } = useTranslation()

  const iconStyles = {
    width: '1.25rem',
  }

  const handleToggleLang = async () => {
    const currentLang = i18n.language
    const switchToLang = currentLang === 'es' ? 'en' : 'es'
    try {
      await i18n.changeLanguage(switchToLang)
      localStorage.setItem(LS_LANG_KEY, switchToLang)
    } catch (e) {
      // Error
    }
  }

  return (
    <IconButton Icon={LangIcon} css={iconStyles} onClick={handleToggleLang} />
  )
}

export default LangButton
