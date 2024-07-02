import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}