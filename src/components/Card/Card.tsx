import { FilmProps } from "../../models";

export const Card = function ({ film }: FilmProps) {
  const {
    title,
    release_date: releaseDate,
    overview,
    poster_path: poster,
    genre_ids: genreList,
  } = film;
  return (
    <li>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
    </li>
  );
};
