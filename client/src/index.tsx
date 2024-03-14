import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
});

// Create a WebSocket link
const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:8000/graphql',
}));

// Create a split link for routing operations
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
)

serviceWorker.unregister()

reportWebVitals()
