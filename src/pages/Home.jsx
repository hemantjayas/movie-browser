import React, { useCallback, useEffect } from 'react'
import "../styles/home.css"
import Movies from '../components/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { currentPage, fetchPopularMovies, selectAllMovies, selectTotalPages } from '../store/movies/moviesSlice'
import SortingFilterPanel from '../components/SortingFilterPanel'


const Home = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectAllMovies);
  const page = useSelector(currentPage)
  const totalPages = useSelector(selectTotalPages)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - .3) {
        console.log('Reached the bottom of the page');
        if (totalPages >= page) {
          dispatch(fetchPopularMovies(page + 1))
        }

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);
  return (
    <div>
      <div className='homeContainer'>
        <SortingFilterPanel />
        <Movies moviesData={movies} />

      </div>
    </div>
  )
}

export default Home