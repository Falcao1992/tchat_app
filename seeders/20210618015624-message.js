module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        content: 'John text',
        author: 'john',
        UserId: '1',
        ConversationId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Sarah text',
        author: 'sarah',
        UserId: '2',
        ConversationId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Myriam text',
        author: 'Myriam',
        UserId: '3',
        ConversationId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
