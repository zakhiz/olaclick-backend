import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly _ordersService: OrdersService) {}

  @Get()
  findAll() {
    return ['Hola mundo'];
  }
}
