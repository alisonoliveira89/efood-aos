import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'
import { useGetRestaurSelectQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Profile = () => {
  const { id } = useParams()
  const { data: food } = useGetRestaurSelectQuery(id!)

  if (!food) {
    return <Loader />
  }

  return (
    <>
      <Header header="profile" />
      <Banner titulo={food.titulo} tipo={food.tipo} />
      <div className="back-container">
        <div className="container">
          <FoodsList food={food} />
        </div>
      </div>
    </>
  )
}

export default Profile
