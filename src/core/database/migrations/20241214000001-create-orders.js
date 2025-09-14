'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      clientName: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM('initiated', 'sent', 'delivered'),
        allowNull: false,
        defaultValue: 'initiated',
      },
      totalAmount: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
