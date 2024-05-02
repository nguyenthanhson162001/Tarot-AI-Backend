import { IEntity } from './entity.interfaces'

export interface IDesk extends IEntity {
  name: string
  slug: string
  avatarUrl: string
}
