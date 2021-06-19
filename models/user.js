module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, allowNull: false},
    lastname: {type: DataTypes.STRING, allowNull: false},
  }, {});
  User.associate = (models) => {
    /* models.User.hasMany(models.Conversation); */
  };
  return User;
};