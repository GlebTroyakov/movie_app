export interface IFilm {
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string
  genre_ids: number[] | []
  vote_average: number
  popularity: number
}

export interface IFilmTransform {
  id: number
  title: string
  releaseDate: string
  overview: string
  posterPath: string
  genreList: number[] | []
  rating: number
  popularity: number
}

export interface FilmProps {
  film: IFilmTransform
}

export interface FilmsProps {
  films: IFilmTransform[]
}
