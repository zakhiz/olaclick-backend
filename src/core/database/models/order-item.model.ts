import { DataTypes, Model, Sequelize } from 'sequelize';

export class OrderItem extends Model {
  public id!: string;
  public orderId!: string;
  public description!: string;
  public quantity!: number;
  public unitPrice!: number;
  public totalPrice!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export const OrderItemFactory = (sequelize: Sequelize): typeof OrderItem => {
  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 500],
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      tableName: 'order_items',
      timestamps: true,
      indexes: [
        {
          unique: false,
          fields: ['orderId'],
        },
        {
          unique: false,
          fields: ['description'],
        },
        {
          unique: false,
          fields: ['createdAt'],
        },
        {
          unique: false,
          fields: ['deletedAt'],
        },
        {
          unique: false,
          fields: ['orderId', 'createdAt'],
        },
      ],
    },
  );

  return OrderItem;
};
