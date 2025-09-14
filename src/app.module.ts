import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [CoreModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
