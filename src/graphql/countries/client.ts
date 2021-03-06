import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client'

const URL = process.env.REACT_APP_COUNTRIES_API_URL

const httpLink = createHttpLink({
  uri: URL,
})

export const countryApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export const countryQuery = async <T>(
  query: DocumentNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<ApolloQueryResult<T>> =>
  countryApolloClient.query({
    query,
    fetchPolicy: 'network-only',
  })
