import { gql } from '@apollo/client/core'

export const ALL_COUNTRIES_NAMES_QUERY = gql`
  {
    countries {
      name
    }
  }
`
