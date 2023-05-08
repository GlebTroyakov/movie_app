import { Input } from 'antd'
import { debounce } from 'lodash'

export const SearchFilmForm = function ({
  searchFilm,
  startFilmList,
}: {
  searchFilm: (name: string) => void
  startFilmList: () => void
}) {
  const changeFilmName = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      startFilmList()
    } else {
      searchFilm(event.target.value)
    }
  }, 500)

  return <Input placeholder="Basic usage" onChange={changeFilmName} />
}
