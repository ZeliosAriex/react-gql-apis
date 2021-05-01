import React from 'react'
import Title from '../../components/shared/Title'
import { PageBaseProps } from '../../types'
import DefaultLayout from '../_layouts/Default'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimeDirectoryPage = (props: PageBaseProps): JSX.Element => {
  return (
    <DefaultLayout>
      <Title>AnimeDirectoryPage</Title>
    </DefaultLayout>
  )
}

export default AnimeDirectoryPage
