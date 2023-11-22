import React, { useCallback, useEffect, useState } from 'react'
import MovieCard from './card'
import Header from './header'

export default function MoviePage() {
  const [movies, setMovies] = useState()

  const getMovieData = useCallback(async (searchData) => {
    try {
      const url = process.env.NEXT_PUBLIC_TMDB_URL
      const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
      const fetchOptions = {
        headers : {
          Authorization: `Bearer ${accessToken}`
        }
      }
      
      let pathUrl = '/movie/popular'
      if (searchData && searchData !== "") {
        pathUrl = `/search/movie?query=${searchData}`
      }

      const res = await fetch(`${url}${pathUrl}`, fetchOptions)
      const data = await res.json()

      if (res.status === 200) {
        setMovies(data)
      }
    } catch (error) {
      console.log(error);
    }
  }, [])


  useEffect(() => {
    getMovieData();
  }, [])  

  console.log('movies =>', movies);

  return (
    <>
      <Header onSearch={(value) => {
        return getMovieData(value)
      }}/>
      
      {
      movies && (
        movies?.results?.length > 0 ? <>
          <div className="p-10">
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
                {
                    movies.results.map((items, key) => (
                      <MovieCard dataMovie={items} key={key}/>
                    ))
                }
            </ul>
          </div>
        </>: <div>Data Kosong</div>
      )
     }
    </>
  )
}
