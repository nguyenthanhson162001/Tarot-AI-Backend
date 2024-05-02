export abstract class Entity<Props> {
  id: string
  createdAt: Date
  updatedAt: Date

  constructor(props: Props) {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    Object.assign(this, props)
  }

  update(props: Partial<Entity<Props>>) {
    props.updatedAt = new Date()
    Object.assign(this, props)
  }
}
