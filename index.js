const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const graphql = require('graphql');
const apolloUtils = require('apollo-utilities');

const typeDefs = gql`
  type Query {
    name: String
    books: [Book]
  }

  type Book {
    name: String
    rating: Int
  }
`;

const resolvers = {
  Query: {
    name: () => 'sample',
    books: () => {
      return [
        { name: 'sample book 1', rating: 5 },
        { name: 'sample book 2', rating: 4 },
      ];
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('Server ready at ::4000');
});
