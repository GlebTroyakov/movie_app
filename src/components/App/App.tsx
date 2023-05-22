import { Button, Layout, Tabs } from 'antd'
import { useEffect, useState } from 'react'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'
import { FilmNotFound } from '../FilmNotFound'
import { NotNetwork } from '../NotNetwork'
import { SearchFilmForm } from '../SearchFilmForm'
import './App.css'
import { MoviePagination } from '../MoviePagination'
import { GenresContext } from '../GenreContext'
import { IFilmTransform } from '../../models'

const { Content } = Layout

export function App(): JSX.Element {
  const [genres, setGenres] = useState([])
  const [rateFilms, setRateFilms] = useState<IFilmTransform[]>([])

  const {
    films,
    loading,
    error,
    searchFilm,
    startFilmList,
    totalResults,
    currentPage,
    changePage,
    setCurrentPage,
    getGenres,
    changeMyRating,
    rateMovie,
    getRateMovies,
    // ratedFilms,
  } = MovieServices()

  async function updateGenres() {
    const res = await getGenres()
    setGenres(res)
  }

  useEffect(() => {
    updateGenres()
  }, [])

  const searchTab = (
    <>
      <SearchFilmForm searchFilm={searchFilm} startFilmList={startFilmList} setCurrentPage={setCurrentPage} />
      <NotNetwork />
      <FilmNotFound textError={error} />
      <CardList films={films} loading={loading} changeMyRating={changeMyRating} rateMovie={rateMovie} />
      <MoviePagination totalResults={totalResults} currentPage={currentPage} changePage={changePage} />
    </>
  )

  async function getDivRatedFilms() {
    const result = await getRateMovies(1)
    // console.log('ratedFilms: ', ratedFilms)
    console.log('rateFilms: ', rateFilms)
    console.log('res: ', result)
    setRateFilms(result)
  }

  const test = <CardList films={rateFilms} loading={loading} changeMyRating={changeMyRating} rateMovie={rateMovie} />

  const items = [
    {
      key: '1',
      label: 'Search',
      children: searchTab,
    },
    {
      key: '2',
      label: 'Rated',
      children: test,
    },
  ]

  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <GenresContext.Provider value={genres}>
        <Content
          className="content"
          style={{ width: '1000px', margin: '0 auto', padding: '0 36px 18px', backgroundColor: '#FFFFFF' }}
        >
          <Button onClick={getDivRatedFilms} />
          <Tabs centered defaultActiveKey="1" items={items} size="large" />
        </Content>
      </GenresContext.Provider>
    </div>
  )
}
