import { Prop, Schema } from "@nestjs/mongoose";
import { IEntity } from "src/domain/entities";


@Schema()
export abstract class BaseSchema implements IEntity {
    @Prop({ _id: true })
    id: string;

    @Prop({ default: Date.now, type: Date })
    createdAt: Date;

    @Prop({ default: Date.now, type: Date })
    updatedAt: Date;
}