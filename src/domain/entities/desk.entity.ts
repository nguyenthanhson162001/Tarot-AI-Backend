import { Entity } from './entity'
import { IDesk } from './interfaces/desk.interfaces'

export class Desk extends Entity<IDesk> implements IDesk {
  name: string
  slug: string
  avatarUrl: string

  static create(props: IDesk) {
    return new Desk(props)
  }
}
