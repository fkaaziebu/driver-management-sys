'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tokens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      token: {
        type: Sequelize.STRING,
      },
      lastUsedAt: {
        type: Sequelize.DATE,
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          model: "drivers",
          key: "id",
        },
        onDelete: "cascade",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tokens")
  }
};
