import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { isBrowser } from '../utils'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  ;(global as any).fetch = fetch
}

// create the apollo client
const create = (initialState?: any) => {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

// initialize the client, create one for SSR, or if we're client side use it as a singleton
const initApollo = (initialState?: any) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}

export default initApollo
