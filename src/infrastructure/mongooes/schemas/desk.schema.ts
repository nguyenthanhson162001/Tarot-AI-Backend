import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from './schema.base';
import { IDesk } from 'src/domain/entities';

export type DeskDocument = HydratedDocument<Desk>;

@Schema()
class Desk extends BaseSchema implements IDesk {
    @Prop({ type: String, required: true })
    deskId: string;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    slug: string;

    @Prop({ type: String, required: true })
    avatarUrl: string;

    @Prop({ type: String, required: true })
    description: string;
}

export const DeskSchema = SchemaFactory.createForClass(Desk);