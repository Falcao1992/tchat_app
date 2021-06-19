module.exports = {
  up:  (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      author: {
          type: Sequelize.STRING
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        // if userId is deleted so data workout is deleted too
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      ConversationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        // if userId is deleted so data workout is deleted too
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Messages')
};