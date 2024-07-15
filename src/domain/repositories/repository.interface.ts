import { IEntity } from "../entities/entity.base"

export interface IRepository<Entity extends IEntity> {
    create(props: Entity): Promise<Entity>
    update(id: string, props: Partial<Entity>): Promise<Entity>
    delete(id: string): Promise<void>
    findById(id: string): Promise<Entity>
    findAll(): Promise<Entity[]>
}