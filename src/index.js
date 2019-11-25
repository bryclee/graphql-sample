const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const app = express();
const server = new ApolloServer({
  schema,
});

console.log('Schema:', schema);

// console.log('Calling "visit" parser');
// require('./parsers/visit')({ schema });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('Server ready at ::4000');
});
