const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const graphql = require('graphql');
const apolloUtils = require('apollo-utilities');

const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const schemaDirectives = require('./src/directives');

const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers, schemaDirectives });
const server = new ApolloServer({
  schema,
});

console.log('Schema:', schema);
console.log(schema.getQueryType().getFields());
console.log(typeof schema.getDirectives()[0]);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('Server ready at ::4000');
});
