declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodMenu[]
}

declare type FoodMenu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
