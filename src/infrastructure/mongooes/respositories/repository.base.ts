import { Document, HydratedDocument, Model, Schema } from "mongoose";
import { Card, IEntity } from "src/domain/entities";
import { IRepository } from "src/domain/repositories/repository.interface";
import { BaseSchema } from "../schemas";

export abstract class BaseRepository<S extends BaseSchema, E extends IEntity> implements IRepository<E> {
    constructor(private _model: Model<S>) {
    }
    abstract convertToEntity(model: HydratedDocument<S>): E;
    abstract convertToModelDocument(entity: Partial<E>): S;

    async create(props: E): Promise<E> {
        const document = await this._model.create(props);
        return this.convertToEntity(document);
    }
    async update(id: string, props: Partial<E>): Promise<E> {
        const docUpdate = this.convertToModelDocument(props);
        await this._model.updateOne({ _id: id }, docUpdate).exec();
        const doc = await this.findById(id);
        return doc;
    }
    async delete(id: string): Promise<void> {
        const docResult = await this._model.findById(id)
        if (docResult) {
            await this._model.deleteOne({ _id: id }).exec();
        }
    }
    async findById(id: string): Promise<E> {
        const document = await this._model.findById(id).exec();
        return this.convertToEntity(document);
    }
    async findAll(): Promise<E[]> {
        const documents = await this._model.find().exec();
        return documents.map(document => this.convertToEntity(document));
    }

}