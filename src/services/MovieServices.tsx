import { useEffect, useState } from 'react'

import { IFilm, IFilmTransform } from '../models'

export const MovieServices = function () {
  const [films, setFilms] = useState<IFilmTransform[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const apiKey = '6d059294113790605b62a1d958ec8ba5'

  function addFilms(film: IFilmTransform): void {
    setFilms((prev) => [...prev, film])
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

  const fetchFilms = async function (url: string) {
    try {
      setLoading(true)
      setError('')
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Could not fetch.')
      }

      const filmsList = await response.json()

      if (filmsList.results.length === 0) {
        setFilms([])
        setLoading(false)
        throw new Error('Film not found. Please, try search another film :)')
      }
      const transformFilmsList = filmsList.results.map((film: IFilm) => transformFilm(film))

      setFilms(transformFilmsList)
      setLoading(false)
    } catch (err: any) {
      setLoading(false)
      setError(err.message)
    }
  }

  function searchFilm(name: string) {
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const nameUpdate = name.replace(' ', '+')
    const urlFinished = `${urlBase}?api_key=${apiKey}&query=${nameUpdate}`

    fetchFilms(urlFinished)
  }

  function startFilmList() {
    const urlBase =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    const urlPopularFilms = `${urlBase}&api_key=${apiKey}`

    fetchFilms(urlPopularFilms)
  }

  useEffect(() => {
    fetchFilms(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=6d059294113790605b62a1d958ec8ba5'
    )
  }, [])

  return { films, error, loading, addFilms, searchFilm, startFilmList }
}
