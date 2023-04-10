'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'BlogPost',
        id: 'id',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Category',
        id: 'id'
      }
    }
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  })

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
    {
      as: 'posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory, 
    });
    models.BlogPost.belongsToMany(models.Category,
    {
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory, 
    });
  };
  return PostCategory;
};