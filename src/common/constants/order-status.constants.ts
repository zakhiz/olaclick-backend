export const ORDER_STATUS = {
  INITIATED: 'initiated',
  SENT: 'sent',
  DELIVERED: 'delivered',
} as const;

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
