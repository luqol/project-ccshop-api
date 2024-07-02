import { IsArray, IsInt, IsNotEmpty, IsString, IsUUID, Length, Max, Min, ValidateNested } from "class-validator"
import { Type } from 'class-transformer';

class OrderProduct {

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string;

    @IsString()
    note: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(100)
    quantity: number;
}

export class CreateOrderDTO {

    @IsNotEmpty()
    @IsString()
    @Length(3,100)
    clientName: string

    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsInt()
    phone: number

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderProduct)
    orderProducts: OrderProduct[];
}