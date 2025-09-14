'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_items', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      description: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      unitPrice: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
    });

    // Crear índices
    await queryInterface.addIndex('order_items', ['orderId']);
    await queryInterface.addIndex('order_items', ['description']);
    await queryInterface.addIndex('order_items', ['createdAt']);
    await queryInterface.addIndex('order_items', ['deletedAt']);
    await queryInterface.addIndex('order_items', ['orderId', 'createdAt']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  },
};
