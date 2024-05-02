import { IEntity } from './entity.interfaces'

export interface ICard extends IEntity {
  deskId: string
  name: string
  slug: string
  avatarUrl: string
  description: string
}
