'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategoriesTable = queryInterface.createTable('posts_categories',
    {
      post_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        primatyKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
        },
        primatyKey: true,
      }
    })
    return PostsCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts_categories');
  }
};
