import { gql } from '@apollo/client/core'

export const getAllCharacters = () => gql`
  {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        gender
        image
        origin {
          name
          dimension
        }
      }
    }
  }
`
