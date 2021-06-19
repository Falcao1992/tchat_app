module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        lastname: 'doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sarah',
        lastname: 'Connor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Myriam',
        lastname: 'lastname Myriam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
