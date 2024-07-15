import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from './schema.base';
import { ICard } from 'src/domain/entities';

export type CardDocument = HydratedDocument<CardSchema>;

@Schema()
export class CardSchema extends BaseSchema implements ICard {
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


SchemaFactory.createForClass(CardSchema);