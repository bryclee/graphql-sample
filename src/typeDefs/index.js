const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    name: String @sla(timeout: 10000)
    books: [Book]
  }

  type Book {
    name: String
    rating: Int
  }

  directive @sla(timeout: Int) on FIELD_DEFINITION
`;

module.exports = typeDefs;
