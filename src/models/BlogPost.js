'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'blog_posts',
    underscored: true,
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
    {
      foreignKey: 'userId', 
      as: 'user'
    });
  };
  return BlogPost;
};