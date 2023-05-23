import { Layout, Spin, Tabs } from 'antd'
import { useEffect, useState } from 'react'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'
import { FilmNotFound } from '../FilmNotFound'
import { NotNetwork } from '../NotNetwork'
import { SearchFilmForm } from '../SearchFilmForm'
import './App.css'
import { MoviePagination } from '../MoviePagination'
import { GenresContext } from '../GenreContext'

const { Content } = Layout

export function App(): JSX.Element {
  const [genres, setGenres] = useState([])

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
    rateMovie,
    getRateMovies,
    ratedFilms,
    loadingRated,
    totalRatedResults,
    currentRatedPage,
    changeRatedPage,
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
      <CardList films={films} loading={loading} rateMovie={rateMovie} />
      <MoviePagination totalResults={totalResults} currentPage={currentPage} changePage={changePage} />
    </>
  )

  const ratedTab = (
    <>
      {loadingRated && (
        <div className="films-spin">
          <Spin />
        </div>
      )}
      <CardList films={ratedFilms} loading={loading} />
      {totalRatedResults > 20 && (
        <MoviePagination totalResults={totalRatedResults} currentPage={currentRatedPage} changePage={changeRatedPage} />
      )}
    </>
  )

  const items = [
    {
      key: '1',
      label: 'Search',
      children: searchTab,
    },
    {
      key: '2',
      label: 'Rated',
      children: ratedTab,
    },
  ]

  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <GenresContext.Provider value={genres}>
        <Content className="content">
          <Tabs
            centered
            defaultActiveKey="1"
            items={items}
            size="large"
            onTabClick={(key) => {
              if (key === '2') {
                getRateMovies(currentRatedPage)
              }
            }}
          />
        </Content>
      </GenresContext.Provider>
    </div>
  )
}
