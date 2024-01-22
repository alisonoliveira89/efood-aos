import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header header="home" />
      <div className="container">
        <RestaurantsList restaurant={restaurant} />
      </div>
    </>
  )
}

export default Home
