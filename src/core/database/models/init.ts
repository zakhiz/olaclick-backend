import { Sequelize } from 'sequelize';
import { OrderItemFactory } from './order-item.model';
import { OrderFactory } from './order.model';

export const initializeModels = (sequelize: Sequelize) => {
  const OrderModel = OrderFactory(sequelize);
  const OrderItemModel = OrderItemFactory(sequelize);

  OrderModel.hasMany(OrderItemModel, {
    foreignKey: 'orderId',
    as: 'items',
  });

  OrderItemModel.belongsTo(OrderModel, {
    foreignKey: 'orderId',
    as: 'order',
  });

  return {
    Order: OrderModel,
    OrderItem: OrderItemModel,
  };
};
