export class Vital {
  id: number
  name: string
  image: string
  value: string
  measuredBy: string

  constructor({
    id,
    name,
    image,
    value,
    measuredBy
  }: {
    id: number
    name: string
    image: string
    value: string
    measuredBy: string
  }) {
    this.id = id
    this.name = name
    this.image = image
    this.value = value
    this.measuredBy = measuredBy
  }
}
