const resolvers = {
  Query: {
    name: () => 'sample',
    books: () => {
      return [
        { name: 'sample book 1', rating: 5, category: 'FICTION' },
        { name: 'sample book 2', rating: 4, category: 'NON_FICTION' },
        { name: 'sample book 3', rating: 4.5, category: 'FROG_FICTION' },
        { error: 'Silly string' },
      ];
    },
  },
};

module.exports = resolvers;
