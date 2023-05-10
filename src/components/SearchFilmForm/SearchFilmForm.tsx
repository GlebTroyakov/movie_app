import { Input } from 'antd'
import { debounce } from 'lodash'

export const SearchFilmForm = function ({
  searchFilm,
  startFilmList,
  setCurrentPage,
}: {
  searchFilm: (name: string, pageNumber: number) => void
  startFilmList: (pageNumber: number) => void
  setCurrentPage: (pageNumber: number) => void
}) {
  const changeFilmName = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setCurrentPage(1)
      startFilmList(1)
    } else {
      setCurrentPage(1)
      searchFilm(event.target.value, 1)
    }
  }, 500)

  return <Input placeholder="Search film" onChange={changeFilmName} style={{ marginBottom: '36px' }} />
}
