import { Card } from "src/domain/entities";
import { BaseRepository } from "./repository.base";
import { Document, Model, Schema, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CardDocument } from "../schemas";

export class CardRepository extends BaseRepository<CardDocument, Card> {
    convertToEntity(model: Document<unknown, {}, Card> & Card & { _id: Types.ObjectId; }): Card {
        throw new Error("Method not implemented.");
    }
    convertToModelDocument(entity: Card): Document<unknown, {}, Card> & Card & { _id: Types.ObjectId; } {
        throw new Error("Method not implemented.");
    }

    constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {
        super(cardModel);
    }

}