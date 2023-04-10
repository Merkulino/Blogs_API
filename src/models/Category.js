'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  })

  // Users.associate = (models) => {
  //   Users.belongsTo(models.Plan,
  //   {
  //     foreignKey: 'plan_id', 
  //     as: 'plan'
  //   });
  // };
  return Category;
};