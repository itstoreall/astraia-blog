import { ApolloClient, InMemoryCache } from '@apollo/client';

// console.log('process.env.APOLLO_CLIENT_URL', process.env.APOLLO_CLIENT_URL);

// const apolloClientUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://magic-api-vercel.vercel.app/'
//     : 'http://localhost:8822/';
// const serverSwitch = currentUrl;

const apolloClientUrl = process.env.APOLLO_CLIENT_URL;
// const apolloClientUrl = 'http://localhost:8822/';

const client = new ApolloClient({
  uri: apolloClientUrl,
  cache: new InMemoryCache(),
});

export default client;
