import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client'

const URL = process.env.REACT_APP_RICK_MORTY_API_URL

const httpLink = createHttpLink({
  uri: URL,
})

export const rickAndMortyApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export const rickAndMortyQuery = async <T>(
  query: DocumentNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<ApolloQueryResult<T>> =>
  rickAndMortyApolloClient.query({
    query,
    fetchPolicy: 'network-only',
  })
