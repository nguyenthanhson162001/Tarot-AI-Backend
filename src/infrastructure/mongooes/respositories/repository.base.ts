import { HydratedDocument, Model, Schema } from "mongoose";
import { IEntity } from "src/domain/entities";
import { IRepository } from "src/domain/repositories/repository.interface";
import { BaseSchema } from "../schemas";

export abstract class BaseRepository<M extends HydratedDocument<BaseSchema>, E extends IEntity> implements IRepository<E> {
    constructor(private _model: Model<BaseSchema>) {
    }
    create(props: E): Promise<E> {
        this._model.create(props);
        throw new Error("Method not implemented.");
    }
    update(id: string, props: Partial<E>): Promise<E> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<E> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<E[]> {
        throw new Error("Method not implemented.");
    }
    abstract convertToEntity(model: M): E;
    abstract convertToModelDocument(entity: E): M;
}