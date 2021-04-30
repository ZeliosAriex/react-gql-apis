import { Link } from '@reach/router'
import React from 'react'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage = (props: PageBaseProps): JSX.Element => {
  return (
    <>
      <Title>Home</Title>
      <Link to='/anime'>Go to anime directory</Link>
    </>
  )
}

export default HomePage
