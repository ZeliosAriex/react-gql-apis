import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client'

const URL = process.env.REACT_APP_ANIME_API_URL

const httpLink = createHttpLink({
  uri: URL,
})

export const animeApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export const animeQuery = async <T>(
  query: DocumentNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<ApolloQueryResult<T>> =>
  animeApolloClient.query({
    query,
    fetchPolicy: 'network-only',
  })
