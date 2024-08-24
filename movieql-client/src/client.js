import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

// Create a new ApolloClient instance and export it
const client = new ApolloClient({
  uri: "http://localhost:4000/", // The URL of the GraphQL server: graphql-server/server.js
  cache: new InMemoryCache(),
});

export default client;
