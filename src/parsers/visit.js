/**
 * Approach:
 * On new schema, traverse the schema for fields with the @sla directive. Create a map of values of timeouts vs fields.
 * On incoming request, traverse the query AST and see if the keys match the fields with timeout values.
 *
 * TBD:
 * - How do you match keys? Note that the type might be used in different places of the schema
 * - How do you add up the timeouts? Some level of depth?
 * */
const { visit } = require('graphql');

const detectDirectivesInSchema = schema => {
  // TODO: This is the wrong idea. `visit` works on the AST, not the schema.
  // How can we iterate through the schema to find the @sla directives?
  visit(schema, {});
};

module.exports = ({ schema }) => {
  detectDirectivesInSchema(schema);
};
