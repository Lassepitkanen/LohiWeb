import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({});

const query = (query: any) => client.query({ query: query });
const mutate = (query: any) => client.mutate({ mutation: query });

export { client, query };
