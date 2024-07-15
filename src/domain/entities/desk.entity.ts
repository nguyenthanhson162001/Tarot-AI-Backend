import { Entity, IEntity } from './entity.base'
export interface IDesk extends IEntity {
  name: string
  slug: string
  avatarUrl: string
}

export class Desk extends Entity<IDesk> implements IDesk {
  name: string
  slug: string
  avatarUrl: string

  static create(props: IDesk) {
    return new Desk(props)
  }
}
