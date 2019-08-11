import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({});

const query = (query: any) => client.query({ query: query });
const mutate = (variables: object, mutation: any) => client.mutate({ variables: variables, mutation: mutation });

export { client, query, mutate };
