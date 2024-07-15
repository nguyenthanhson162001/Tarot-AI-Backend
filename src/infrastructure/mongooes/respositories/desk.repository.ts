import { InjectModel } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";
import { Desk } from "src/domain/entities";
import { DeskSchema } from "../schemas";
import { BaseRepository } from "./repository.base";
export class DeskRepository extends BaseRepository<DeskSchema, Desk> {

    convertToEntity(model: HydratedDocument<DeskSchema>): Desk {
        // because the entity is the same as the model document, we can just return the entity
        return new Desk(model);
    }
    convertToModelDocument(entity: Desk): DeskSchema {
        // because the entity is the same as the model document, we can just return the entity
        return entity
    }

    constructor(@InjectModel(Desk.name) private cardSchema: Model<Desk>) {
        super(cardSchema)
    }
}