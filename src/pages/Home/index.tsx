import { Link } from '@reach/router'
import React, { useContext } from 'react'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import { DarkModeContext } from '../../contexts/darkMode'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage = (props: PageBaseProps): JSX.Element => {
  const { toggleDarkMode } = useContext(DarkModeContext)

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return (
    <>
      <Title>Home</Title>
      <button type='button' onClick={handleToggleDarkMode}>
        Dark Mode!
      </button>
      <Link to='/anime'>Go to anime directory</Link>
    </>
  )
}

export default HomePage
