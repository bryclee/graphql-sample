const { SchemaDirectiveVisitor } = require('apollo-server-express');

class SlaDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.timeout = this.args.timeout;
  }
}

module.exports = SlaDirective;
