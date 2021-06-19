module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    UserId: {
      type: DataTypes.STRING,
      references: {
        model: "Users",
        key: 'id'
      }
    },
    ConversationId: {
      type: DataTypes.STRING,
      references: {
        model: "Conversations",
        key: 'id'
      }
    }
  }, {});
  Message.associate = (models) => {
    models.Message.belongsTo(models.User);
    models.Message.belongsTo(models.Conversation);
  };
  return Message;
};