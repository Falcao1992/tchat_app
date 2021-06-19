module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conversations', [
      {
        name: "premiere conversations",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conversations', null, {});
  }
};