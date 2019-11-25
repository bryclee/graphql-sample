const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const schemaDirectives = require('./directives');

const schema = makeExecutableSchema({ typeDefs, resolvers, schemaDirectives });

module.exports = schema;
