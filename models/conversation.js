module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    name: DataTypes.STRING,
  }, {});
  Conversation.associate = (models) => {
    /*models.Conversation.hasMany(models.User,  {onDelete: 'cascade'});*/
    models.Conversation.hasMany(models.Message,  {onDelete: 'cascade'});
  };
  return Conversation;
};