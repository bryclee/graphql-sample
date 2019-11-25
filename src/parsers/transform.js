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

module.exports = ({ schema, query }) => {};
