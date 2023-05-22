import { useEffect, useState } from 'react'

import { IFilm, IFilmTransform } from '../models'

export const MovieServices = function () {
  const [films, setFilms] = useState<IFilmTransform[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState(false)
  const [filmName, setFilmName] = useState('')

  const apiKey = '6d059294113790605b62a1d958ec8ba5'
  const urlBase = 'https://api.themoviedb.org/3'

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
      myRating: 0,
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

      if (filmsList.total_results === 0) {
        setFilms([])
        setLoading(false)
        throw new Error('Film not found. Please, try search another film :)')
      }

      setTotalResults(filmsList.total_results)

      const transformFilmsList = filmsList.results.map((film: IFilm) => transformFilm(film))

      setFilms(transformFilmsList)
      setLoading(false)
    } catch (err: any) {
      setLoading(false)
      setError(err.message)
    }
  }

  function searchFilm(name: string, page: number = currentPage) {
    const nameUpdate = name.replace(' ', '+')
    const urlFinished = `${urlBase}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${nameUpdate}`

    setSearch(true)
    setFilmName(name)
    fetchFilms(urlFinished)
    window.scrollTo(0, 0)
  }

  function startFilmList(page: number = currentPage) {
    const popularFilmsParameters =
      'discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc'
    const urlPopularFilms = `${urlBase}/${popularFilmsParameters}&page=${page}&api_key=${apiKey}`

    setSearch(false)
    setFilmName('')
    fetchFilms(urlPopularFilms)
  }

  function changePage(pageNumber: number) {
    setCurrentPage(pageNumber)

    if (search) {
      searchFilm(filmName, pageNumber)
    } else {
      startFilmList(pageNumber)
    }
  }

  async function getGenres() {
    const parameters = 'language=en-US'
    const resource = 'genre/movie/list'
    const url = `${urlBase}/${resource}?api_key=${apiKey}&${parameters}`
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('Could not fetch.')
    }

    const { genres } = await res.json()

    return genres //  [{ "id": 28, "name": "Action" }, { "id": 12,  "name": "Abenteuer"}...]
  }

  useEffect(() => {
    startFilmList()
  }, [])

  return {
    films,
    error,
    loading,
    addFilms,
    searchFilm,
    startFilmList,
    totalResults,
    search,
    currentPage,
    changePage,
    setCurrentPage,
    getGenres,
  }
}
