import { DataTypes, Model, Sequelize } from 'sequelize';
import { ORDER_STATUS, OrderStatus } from 'src/common';

export class Order extends Model {
  public id!: string;
  public clientName!: string;
  public status!: OrderStatus;
  public totalAmount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const OrderFactory = (sequelize: Sequelize): typeof Order => {
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      clientName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2, 255],
        },
      },
      status: {
        type: DataTypes.ENUM(...Object.values(ORDER_STATUS)),
        allowNull: false,
        defaultValue: ORDER_STATUS.INITIATED,
        validate: {
          isIn: [Object.values(ORDER_STATUS)],
        },
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      tableName: 'orders',
      timestamps: true,
      indexes: [
        {
          unique: false,
          fields: ['status'],
        },
        {
          unique: false,
          fields: ['createdAt'],
        },
        {
          unique: false,
          fields: ['clientName'],
        },
        {
          unique: false,
          fields: ['status', 'createdAt'],
        },
      ],
    },
  );

  return Order;
};
