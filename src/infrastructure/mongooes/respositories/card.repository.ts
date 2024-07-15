import { InjectModel } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";
import { Card } from "src/domain/entities";
import { CardSchema } from "../schemas/card.schema";
import { BaseRepository } from "./repository.base";
export class CardRepository extends BaseRepository<CardSchema, Card> {

    convertToEntity(model: HydratedDocument<CardSchema>): Card {
        return new Card({
            avatarUrl: model.avatarUrl,
            deskId: model.deskId,
            description: model.description,
            id: model.id,
            name: model.name,
            slug: model.slug,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        });
    }
    convertToModelDocument(entity: Card): CardSchema {
        return {
            avatarUrl: entity.avatarUrl,
            deskId: entity.deskId,
            description: entity.description,
            id: entity.id,
            name: entity.name,
            slug: entity.slug,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt
        }
    }

    constructor(@InjectModel(Card.name) private cardSchema: Model<Card>) {
        super(cardSchema)
    }
    async findByDeskId(deskId: string): Promise<Card[]> {
        const documents = await this.cardSchema.find({ deskId: deskId }).exec();
        return documents.map(document => this.convertToEntity(document));
    }
}