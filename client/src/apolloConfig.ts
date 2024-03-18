import { createHttpLink, split, ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";


const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_URI,
});

const wsLink = new GraphQLWsLink(createClient({
  url: process.env.REACT_APP_SUBSCRIPTION_URL || "",
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const apoloClient = new ApolloClient({
  link: splitLink,
  uri: process.env.REACT_APP_SERVER_URI,
  cache: new InMemoryCache(),
});