import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './repository/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly _ordersRepository: OrdersRepository) {}
}
