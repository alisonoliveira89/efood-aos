class Restaurant {
  title: string
  points: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    points: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.points = points
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurant
