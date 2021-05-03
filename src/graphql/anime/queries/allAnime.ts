import { gql } from '@apollo/client/core'

export const getAllAnime = () => gql`
  {
    Page {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: POPULARITY_DESC) {
        id
        title {
          english
        }
        episodes
        nextAiringEpisode {
          episode
        }
        format
        status
        averageScore
        tags {
          name
        }
        coverImage {
          large
          medium
        }
      }
    }
  }
`
