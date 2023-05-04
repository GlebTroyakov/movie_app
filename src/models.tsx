export interface IFilm {
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string
  genre_ids: string
}

export interface FilmProps {
  film: IFilm
}

export interface FilmsProps {
  films: IFilm[]
}
