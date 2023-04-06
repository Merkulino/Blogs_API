'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primatyKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
    tableName: 'User',
    underscored: true,
  })

  // Users.associate = (models) => {
  //   Users.belongsTo(models.Plan,
  //   {
  //     foreignKey: 'plan_id', 
  //     as: 'plan'
  //   });
  // };
  return User;
};