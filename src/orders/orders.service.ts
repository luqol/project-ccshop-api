import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) {}

    public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany({
            include: {orderProducts: true}
        });
    }

    public getById( id: Order['id']): Promise<Order> {
        return this.prismaService.order.findUnique({
            where: { id },
            include: {orderProducts: true}
        })
    }

    public async create(orderData: CreateOrderDTO): Promise<Order> {
        try{
            const order = await this.prismaService.order.create( {
                data: {
                    clientName: orderData.clientName,
                    email: orderData.email,
                    address: orderData.address,
                    phone: orderData.phone
                }
            });

            for ( let product of orderData.orderProducts ) {
                await this.prismaService.orderProduct.create( {
                    data: {
                        orderId: order.id,
                        productId: product.productId,
                        note: product.note,
                        quantity: product.quantity
                    }
                })
            }


            return order;

        } catch (err) {
            throw new Error(err);
        }
    }
}
