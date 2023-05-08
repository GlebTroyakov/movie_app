import { Input } from 'antd'
import { useState } from 'react'

export const SearchFilmForm = function ({ searchFilm }: { searchFilm: (name: string) => void }) {
  const [filmName, setFilmName] = useState('')
  console.log(searchFilm)

  const onClickEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchFilm(filmName)
      setFilmName('')
    }
    return false
  }

  const changeFilmName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilmName(event.target.value)
  }

  return <Input placeholder="Basic usage" onChange={changeFilmName} onKeyDown={onClickEnter} value={filmName} />
}
