import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'
import { useGetRestaurSelectQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: food } = useGetRestaurSelectQuery(id!)

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
