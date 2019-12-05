/**
 * Approach:
 * On new schema, run transform against it to turn all Scalars -> Ints
 * Start with some base value, each resolver should add value of its own timeout value, if present
 * On incoming query, run against new schema, then iterate through result to find highest timeout value
 *
 * TBD:
 * - What about union interfaces?
 * */
const { transformSchema } = require('graphql-tools');
const {
  visitSchema,
  VisitSchemaKind,
} = require('graphql-tools/dist/transforms/visitSchema');

module.exports = ({ schema, query }) => {
  visitSchema(schema, {
    [VisitSchemaKind.OBJECT_TYPE]: type => {
      const fields = type.getFields();

      Object.keys(fields).forEach(field => {
        console.log(field.getDirectives());
      });

      // export type GraphQLType =
      // | GraphQLScalarType
      // -> nothing - return parent
      // | GraphQLObjectType
      // -> getFields, check for leaf fields
      // | GraphQLInterfaceType
      // -> nothing
      // | GraphQLUnionType
      // -> change resolver?
      // | GraphQLEnumType
      // -> nothing?
      // | GraphQLInputObjectType
      // -> nothing?
      // | GraphQLList<any>
      // -> change resolver to return one of each?
      // | GraphQLNonNull<any>;
      // -> what is this?
    },
  });
};
