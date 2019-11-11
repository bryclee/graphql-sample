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

module.exports = resolvers;
