import { Entity, IEntity } from './entity.base'
export interface ICard extends IEntity {
  deskId: string
  name: string
  slug: string
  avatarUrl: string
  description: string
}

export class Card extends Entity<ICard> implements ICard {
  deskId: string
  name: string
  slug: string
  avatarUrl: string
  description: string

  static create(props: ICard) {
    return new Card(props)
  }
}


