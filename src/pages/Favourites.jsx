import React from 'react'
import Movies from '../components/Movies'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../store/favourites/favouriteSlice'

const Favourites = () => {

  const favMovies = useSelector(selectFavorites)
  return (
    <div>
      <Movies moviesData={favMovies} />

    </div>
  )
}

export default Favourites