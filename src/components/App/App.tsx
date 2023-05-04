import React, { useState } from "react";
import { CardList } from "../CardList/CardList";
import { MovieServices } from "../../services/MovieServices";
import { IFilm } from "../../models";

export function App() {
  const [filmsList, setFilmsList] = useState<IFilm[]>([]);
  const { films, error, addFilms, searchFilm } = MovieServices();

  // const getFilms = async function () {
  //   const { films, error, addFilms, searchFilm } = MovieServices();
  //   return { films, error, addFilms, searchFilm };
  // };

  // const res = getFilms();
  // res.then((result) => {
  //   result.searchFilm("the way back");
  //   setFilmsList(result.films);
  // });
  // console.log(films);
  // searchFilm("the way back");

  return <div>{<CardList films={films} />}</div>;
}
