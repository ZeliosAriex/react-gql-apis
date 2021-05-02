import { gql } from '@apollo/client/core'

export const getAllCountries = () => gql`
  {
    countries {
      name
    }
  }
`
