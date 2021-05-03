/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import { DarkModeContext } from '../../../contexts/darkMode'
import { SunIcon } from '../../../assets/icons/smart/SunIcon'
import { MoonIcon } from '../../../assets/icons/smart/MoonIcon'
import IconButton from '../IconButton'

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  const iconStyles = {
    width: '1.25rem',
    marginLeft: '1rem',
  }

  return darkMode ? (
    <IconButton
      Icon={SunIcon}
      css={iconStyles}
      onClick={handleToggleDarkMode}
    />
  ) : (
    <IconButton
      Icon={MoonIcon}
      css={iconStyles}
      onClick={handleToggleDarkMode}
    />
  )
}

export default DarkModeButton
