import { IEntity } from './entity.base'
export interface ICard extends IEntity {
  deskId: string
  name: string
  slug: string
  avatarUrl: string
  description: string
}

export class Card implements ICard {
  id: string
  deskId: string
  name: string
  slug: string
  avatarUrl: string
  description: string
  createdAt: Date
  updatedAt: Date
}
