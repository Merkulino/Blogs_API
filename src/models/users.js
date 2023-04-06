'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    display_name: {
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
    tableName: 'users',
    underscored: true,
  })

  // Users.associate = (models) => {
  //   Users.belongsTo(models.Plan,
  //   {
  //     foreignKey: 'plan_id', 
  //     as: 'plan'
  //   });
  // };
  return Users;
};