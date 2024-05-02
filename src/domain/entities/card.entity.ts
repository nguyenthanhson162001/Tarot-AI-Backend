import { ICard } from './interfaces/card.interfaces'

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
