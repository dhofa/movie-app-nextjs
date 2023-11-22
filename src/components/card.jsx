import React from 'react'

export default function MovieCard(props) {
  const { dataMovie } = props
  const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL

  return (
    <>
      <li className="w-full mx-auto group sm:max-w-sm">
          <a href="/movie/detail">
              <img src={`${imageUrl}${dataMovie.poster_path}`} loading="lazy" alt={dataMovie.original_title} className="w-full rounded-lg" />
              <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">{dataMovie.release_date}</span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {dataMovie.original_title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{dataMovie.overview}</p>
              </div>
          </a>
      </li>
    </>
  )
}
