import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'
import { Restaurant } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [id])

  // useEffect(() => {
  //   if (xfood) {
  //     console.log('XFood atualizado')
  //     for (const item of xfood.cardapio) {
  //       console.log('Id ', item.id, ' Nome: ', item.nome)
  //     }
  //   }
  // }, [food])

  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header header="profile" />
      <Banner titulo={food.titulo} tipo={food.tipo} />
      <div className="container">
        <FoodsList food={food} />
      </div>
    </>
  )
}

export default Profile
