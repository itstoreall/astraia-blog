import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClientUrl = process.env.APOLLO_CLIENT_URL;

const getFunctionClient = () =>
  new ApolloClient({
    uri: apolloClientUrl,
    cache: new InMemoryCache(),
  });

export default getFunctionClient;
