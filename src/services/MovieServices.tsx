import { useEffect, useState } from 'react'

import { IFilm, IFilmTransform } from '../models'

export const MovieServices = function () {
  const [films, setFilms] = useState<IFilmTransform[]>([])
  const [error, setError] = useState('')
  const [filmName, setFilmName] = useState('the way back')

  function addFilms(film: IFilmTransform): void {
    setFilms((prev) => [...prev, film])
  }

  function searchFilm(name: string) {
    setFilmName(name)
  }

  const transformFilm = function (film: IFilm) {
    return {
      id: film.id,
      title: film.title,
      releaseDate: film.release_date,
      overview: film.overview,
      posterPath: film.poster_path,
      genreList: film.genre_ids,
      rating: film.vote_average,
      popularity: film.popularity,
    }
  }

  const fetchFilms = async function (query: string) {
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = '6d059294113790605b62a1d958ec8ba5'
    const queryUpdate = query.replace(' ', '+')
    const urlFinished = `${urlBase}?api_key=${apiKey}&query=${queryUpdate}`

    try {
      setError('')
      const response = await fetch(urlFinished)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const filmsList = await response.json()
      const transformFilmsList = filmsList.results.map((film: IFilm) => transformFilm(film))

      setFilms(transformFilmsList)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchFilms(filmName)
    // console.log("films im services", films);
  }, [filmName])

  return { films, error, addFilms, searchFilm }
}
