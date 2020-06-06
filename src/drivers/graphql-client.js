import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
});

export const get = () => {
    return client
    .query({
      query: gql`
      { 
        viewer { 
          login
        }
      }`
    })
}