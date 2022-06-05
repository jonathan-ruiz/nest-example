'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Players', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      amount: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Players');
  }
};
